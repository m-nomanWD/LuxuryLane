import React from 'react'
import styles from './index.module.css'
import { Filter, Pagination } from '../../components/index'
export default function AllProducts() {
  return (
    <>
      <h1>Explore Our Store</h1>
      <div className={styles.mainContainerPagination}>
        <Filter />
        <Pagination />
      </div>
    </>
  )
}
