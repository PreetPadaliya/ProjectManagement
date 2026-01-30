import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />

        {/* Admin Routes*/}
        <Route element={<PrivateRoute allowedRoles={['admin']} />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
