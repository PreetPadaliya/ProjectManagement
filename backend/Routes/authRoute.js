const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

// Auth Routes

router.post('/register' , registerUser); // register user
router.post('/login' , loginUser); // login user
router.get('/profile' ,protect , getUserProfile); //profile user
router.put('/profile' , protect, updateUserProfile);  // update profile user

module.exports  = router;

