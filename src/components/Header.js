import logo from '../images/Vector.png'
import { Link, useLocation } from 'react-router'
import { useEffect, useState } from 'react'

export default function Header({ handleLogout }) {
  const location = useLocation()
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    const email = localStorage.getItem('userEmail')
    if (email) {
      setUserEmail(email)
    }
  }, [])

  const getNavLink = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <p>{userEmail}</p> <Link onClick={handleLogout}>Sair</Link>
          </>
        )
      case '/signup':
        return <Link to="/signin">Faça o Login</Link>
      case '/signin':
        return <Link to="/signup">Entrar</Link>
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <img
          className="header__logo"
          src={logo}
          alt="Logo escrito Around the U.S."
        />
        <div className="navbar">{getNavLink()}</div>
      </div>
    </header>
  )
}
