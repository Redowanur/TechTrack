import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Error from './pages/Error.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Watchlist from './pages/Watchlist.jsx'
import AddProduct from './pages/AddProduct.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Products from './pages/Products.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {path: '', element: <Home/>},
      {path: 'signin', element: <Signin/>},
      {path: 'signup', element: <Signup/>},
      {path: 'watchlist', element: <Watchlist/>},
      {path: 'add-product', element: <AddProduct/>},
      {path: 'products/:id', element: <ProductPage/>},
      {path: ':category', element: <Products/>},
      {path: ':category/:subcategory', element: <Products/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
