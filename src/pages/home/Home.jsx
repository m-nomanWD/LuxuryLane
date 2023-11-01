import React, { Children } from 'react'
import { Heading, BodyText, Button } from '../../components/index'

export default function Home() {
  return (
    <>
      <Heading level={1} children={'wellcome to luxury lane!'} />
      <BodyText
        children={'this store is the first project so wish me good luck'}
      />
      <Button type='primary-button' children='add to cart' />
    </>
  )
}
