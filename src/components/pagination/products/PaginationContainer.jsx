import React, { useEffect } from 'react'
import styles from './index.module.css'
import Product from '../../products/product/Product'
import {
  handleFilter,
  handleSetProduct,
} from '../../../features/filterSlice/filterSlice'
import { useSelector, useDispatch } from 'react-redux'
// import { handleFilter } from '../../../features/filterSlice/filterSlice'
export default function PaginationContainer() {
  const dispatch = useDispatch()
  const { projucts, isLoading } = useSelector((store) => store.products)
  const { filterProducts, allProducts, price, star, category } = useSelector(
    (store) => store.filterSlice
  )
  const { cartItems } = useSelector((store) => store.cart)
  useEffect(() => {
    dispatch(handleSetProduct(projucts))
  }, [isLoading, cartItems])

  if (filterProducts.length === 0 && !isLoading) {
    return (
      <div className={styles.containerPagination}>
        <div className={styles.productsContainer}>
          {allProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className={styles.containerPagination}>
      <div className={styles.productsContainer}>
        {filterProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
