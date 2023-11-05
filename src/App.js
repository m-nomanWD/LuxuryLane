import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import {
  Home,
  ShoppingCart,
  AboutUs,
  WishList,
  DetailView,
  CheckOut,
} from './pages'
import { Navbar } from './components'
import { getProducts } from './features/requestSlice/requestSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const { cart } = useSelector((store) => store.cart)
  const { urlModifier } = useSelector((store) => store.products)

  useEffect(() => {
    dispatch(getProducts(urlModifier))
  }, [urlModifier])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/detailview' element={<DetailView />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
