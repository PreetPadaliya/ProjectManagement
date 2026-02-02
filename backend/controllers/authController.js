const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// register new user
// POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImgUrl, adminInviteToken } = req.body;

    // 1. Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Determine role
    let role = "member";
    if (
      adminInviteToken &&
      adminInviteToken === process.env.ADMIN_INVITE_TOKEN
    ) {
      role = "admin";
    }

    // 4. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImgUrl,
      role,
    });

    // 6. Respond with token
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImgUrl: user.profileImgUrl,
      role: user.role,
      token: generateToken(user._id),
    });

  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// placeholders (fine for now)
const loginUser = async (req, res) => {};
const getUserProfile = async (req, res) => {};
const updateUserProfile = async (req, res) => {};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};
