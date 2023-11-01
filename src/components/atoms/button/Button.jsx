import React from 'react'

const Button = ({ type, children, onClick }) => {
  const className = `button ${type}`
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
