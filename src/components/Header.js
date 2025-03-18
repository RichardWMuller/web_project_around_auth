import logo from '../images/Vector.png'

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Logo escrito Around the U.S."
      />
    </header>
  )
}
