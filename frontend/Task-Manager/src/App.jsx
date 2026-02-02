import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Auth/login';
import SignUp from './pages/Auth/SignUp';
import ManageTasks from './pages/Admin/ManageTasks';
import CreateTask from './pages/Admin/CreateTask';
import ManageUser from './pages/Admin/ManageUser';
import MyTasks from './pages/User/MyTasks';
import UserDashboard from './pages/User/UserDashboard';
import MyTaskDetails from './pages/User/MyTaskDetails';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />

        {/* Admin Routes*/}
        <Route element={<PrivateRoute allowedRoles={['admin']} />} >
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/tasks' element={<ManageTasks />} />
          <Route path='/admin/create-task' element={<CreateTask />} />
          <Route path='/admin/users' element={<ManageUser />} />
        </Route>

        {/* User Routes*/}
        <Route element={<PrivateRoute allowedRoles={['user']} />} >
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/user/tasks' element={<MyTasks />} />
          <Route path='/user/task-details/:id' element={<MyTaskDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
