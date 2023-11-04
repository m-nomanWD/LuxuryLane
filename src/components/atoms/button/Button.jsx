import React from 'react'
import { useDispatch } from 'react-redux'

const Button = ({ type, children, onClickAction }) => {
  let className = `button ${type}`
  const dispatch = useDispatch()
  const handleClick = (e) => {
    dispatch(onClickAction)
    e.currentTarget.className = 'disabled-button'
    e.currentTarget.textContent = 'Already in Card'
    e.currentTarget.disabled = true
  }
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
