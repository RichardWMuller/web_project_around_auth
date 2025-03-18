import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  return (
    <>
      <div className="page">
        <Header />

        <Main />

        <Footer />
      </div>
      <template id="elements__list" />
    </>
  )
}

export default App
