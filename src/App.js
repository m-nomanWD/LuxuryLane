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
  AllProducts,
} from './pages'
import { Navbar } from './components'
import { getProducts } from './features/requestSlice/requestSlice'
import { useEffect } from 'react'
import { ClipLoader } from 'react-spinners'

function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.products)
  const { urlModifier } = useSelector((store) => store.products)

  useEffect(() => {
    dispatch(getProducts(urlModifier))
  }, [])
  if (isLoading) {
    return (
      <div className='initial-loading'>
        <ClipLoader
          color='#e83e8c'
          loading={isLoading}
          // cssOverride={override}
          size={100}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    )
  }
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
          <Route path='/allproducts' element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
