import React from 'react'
import './index.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { Heading, BodyText, FilterTab, ProductsContainer } from '../../index'

export default function MainContainer() {
  const { isError, isLoading } = useSelector((store) => store.products)
  if (isError) {
    return <h1>Error to Fetch data from APi</h1>
  }
  return (
    <>
      <main className='product-conatier'>
        <header>
          <Heading level={1} children='POPULAR PRODUCTS' />
          <BodyText children='Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.' />
        </header>
        <FilterTab />
        <ProductsContainer />
      </main>
    </>
  )
}
