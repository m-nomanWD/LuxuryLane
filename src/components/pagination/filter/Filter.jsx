import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { handleFilter } from '../../../features/filterSlice/filterSlice'
export default function Filter() {
  const dispatch = useDispatch()
  const { catagroies, projucts } = useSelector((store) => store.products)

  const [filterValue, setFilterValue] = useState({
    price: 9.99,
    stars: 1,
    category: 'all',
  })

  const handleCategoryClick = (catagory) => {
    setFilterValue((prevFilterValue) => ({
      ...prevFilterValue,
      category: catagory,
    }))
    dispatch(handleFilter({ ...filterValue, category: catagory }))
  }

  const handlePriceChange = (e) => {
    const newPrice = e.currentTarget.value
    setFilterValue((prevFilterValue) => ({
      ...prevFilterValue,
      price: newPrice,
    }))
    dispatch(handleFilter({ ...filterValue, price: newPrice }))
  }

  const handleStarsChange = (e) => {
    const newStars = e.currentTarget.value
    setFilterValue((prevFilterValue) => ({
      ...prevFilterValue,
      stars: newStars,
    }))
    dispatch(handleFilter({ ...filterValue, stars: newStars }))
  }
  const handleReset = () => {
    setFilterValue({ price: 9.99, category: 'all', stars: 1 })
    dispatch(
      handleFilter({ ...filterValue, stars: 1, category: 'all', price: 9.99 })
    )
  }
  return (
    <aside className={styles.filterContainer}>
      <header>
        <h2>Filter By:</h2>
      </header>
      <ul className={styles.catFilter}>
        <h3> Categories:</h3>
        <div className={styles.links}>
          {catagroies.map((catagory, index) => (
            <li key={index} onClick={() => handleCategoryClick(catagory)}>
              {catagory}
            </li>
          ))}
        </div>
      </ul>
      <div className={styles.priceFilter}>
        <h3>Price:</h3>
        <div className={styles.priceMain}>
          {' '}
          <div className={styles.inputContainer}>
            <input
              type='range'
              name=''
              id=''
              min={1}
              max={1000}
              readOnly
              value={filterValue.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <input type='text' value={`$ ${filterValue.price}`} />
            <input type='text' readOnly defaultValue={`$1000`} />
          </div>
        </div>
      </div>
      <div className={styles.starsFilter}>
        <h3>Stars:</h3>
        <div className={styles.inputContainer}>
          <input
            type='number'
            name=''
            id=''
            min={1}
            max={5}
            value={filterValue.stars}
            onChange={handleStarsChange}
          />
        </div>
      </div>
      <button className={styles.reset} onClick={() => handleReset()}>
        Reset
      </button>
    </aside>
  )
}
