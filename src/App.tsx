import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyleCss } from './stylesGlobal'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyleCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
