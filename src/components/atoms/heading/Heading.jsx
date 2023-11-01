import React from 'react'

const Heading = ({ level, children }) => {
  const Tag = `h${level}`
  const className = `heading h${level}`
  return <Tag className={className}>{children}</Tag>
}

export default Heading
