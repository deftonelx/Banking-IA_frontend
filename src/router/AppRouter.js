import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="/auth/register" element={<RegisterScreen />} />

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
