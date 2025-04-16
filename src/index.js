import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './components/ProtectedRoute'

const root = ReactDOM.createRoot(document.getElementById('root'))
const token = localStorage.getItem('jwt')
const isLoggedIn = !!token

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <App />
            </ProtectedRoute>
          }
        />

        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
