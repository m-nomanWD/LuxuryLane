import React from 'react'
import './index.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { Heading, BodyText, FilterTab, ProductsContainer } from '../../index'
import ClipLoader from 'react-spinners/ClipLoader'
import { Filter, Pagination } from '../../index'
export default function MainContainer() {
  const { isError, isLoading } = useSelector((store) => store.products)
  if (isLoading) {
    return (
      <div className='loading-container'>
        <div className='poplor'>
          <Heading level={1} children='PRODUCTS FOR LIFE' />
          <BodyText children='Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.' />
        </div>
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
  if (isError) {
    return <h1>Error to Fetch data from APi</h1>
  }
  return (
    <>
      <div className='poplor'>
        <Heading level={1} children='PRODUCTS FOR LIFE' />
        <BodyText children='Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.' />
      </div>
      <main className='product-conatier'>
        {/* <FilterTab />
         */}
        <Filter />
        {/* <ProductsContainer /> */}
        <Pagination />
      </main>
    </>
  )
}
