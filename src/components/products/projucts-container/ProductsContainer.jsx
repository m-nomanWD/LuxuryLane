import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import { Product } from '../../index'
export default function ProductsContainer() {
  const { projucts, productsChunk } = useSelector((store) => store.products)
  if (productsChunk.length === 0) {
    const firstList = projucts.filter(
      (product) => product.category === 'electronics'
    )
    return (
      <>
        <section className='products-container'>
          {firstList.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </section>
      </>
    )
  } else {
    return (
      <>
        <section className='products-container'>
          {productsChunk.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </section>
      </>
    )
  }
}
