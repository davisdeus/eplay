import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyleCss } from './stylesGlobal'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyleCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
