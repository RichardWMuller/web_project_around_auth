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
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute isLoggedIn={false} children={<App />} />}
        />

        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
