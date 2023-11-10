import React, { Children } from 'react'
import { Hero, MainContainer, Strip, Brands, Footer } from '../../components'

export default function Home() {
  return (
    <>
      <Hero />
      <MainContainer />
      <Strip />
      <Brands />
      <Footer />
    </>
  )
}
