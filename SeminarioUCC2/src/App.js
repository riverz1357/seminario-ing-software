import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ImportUsers from './components/ImportForm';
import ConfirmAttendance from './components/ConfirmAttendance';
import Stats from './components/Stats';
import Users from './components/Users';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm" element={<ConfirmAttendance />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        >
          <Route index element={<Navigate to="/dashboard/stats" replace />} />
          <Route path="stats" element={<Stats />} />
          <Route path="users" element={<Users />} />
          <Route path="import" element={<ImportUsers />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;