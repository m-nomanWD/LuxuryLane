import React from 'react'

export default function ItemsInvoice({ item, index }) {
  const { title, amount, price } = item
  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{price}</td>
    </tr>
  )
}
