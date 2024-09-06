import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyleCss } from './stylesGlobal'
import ProductList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoçôes" background="gray" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyleCss />
      <div className="container">
        <Header />
      </div>
      <Banner />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
