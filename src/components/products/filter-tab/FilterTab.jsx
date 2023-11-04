import React from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { handleProductsChunk } from '../../../features/requestSlice/requestSlice'
export default function FilterTab() {
  const { catagroies, projucts, isLoading } = useSelector(
    (store) => store.products
  )
  const dispatch = useDispatch()
  // dispatch(handleModifier('/products?limit=3'))
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className='filter-tab'>
        {catagroies.map((catagory, index) => {
          return (
            <a
              key={index}
              onClick={() => dispatch(handleProductsChunk(catagory))}
            >
              {catagory}
            </a>
          )
        })}
      </div>
    </>
  )
}
