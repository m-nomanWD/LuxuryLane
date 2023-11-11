import React, { useEffect } from 'react'
import styles from './index.module.css'
import Product from '../../products/product/Product'
import { handleSetProduct } from '../../../features/filterSlice/filterSlice'
import { useSelector, useDispatch } from 'react-redux'
export default function PaginationContainer() {
  const dispatch = useDispatch()
  const { projucts } = useSelector((store) => store.products)
  const { filterProducts, allProducts } = useSelector(
    (store) => store.filterSlice
  )
  useEffect(() => {
    dispatch(handleSetProduct(projucts))
    console.log('hello')
  }, [projucts])

  if (allProducts.length === 0) {
    return <h3>Loading...</h3>
  }
  if (filterProducts.length === 0) {
    return <h3>No item found</h3>
  }
  return (
    <div className={styles.containerPagination}>
      <div className={styles.productsContainer}>
        {filterProducts.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  )
}
