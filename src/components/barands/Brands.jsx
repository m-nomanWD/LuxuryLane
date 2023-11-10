import React, { useEffect } from 'react'
import styles from './index.module.css'
import { ChevronUp, ChevronDown } from '../../constants/index'
import { imgArray } from '../../constants/index'
export default function Brands() {
  const containerRef = React.useRef(null)
  const [scroll, setScroll] = React.useState(0)
  const [width, setWidth] = React.useState(0)

  const handleResize = () => {
    const element = containerRef.current
    if (element) {
      let innerWidth = element.clientWidth
      console.log(innerWidth)
      // setScroll(innerWidth)
      setWidth(innerWidth)
    }
  }

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [scroll])
  let counter = 1
  useEffect(() => {
    const timeIter = setInterval(() => {
      if (scroll >= 900) {
        console.log('hello form contition', scroll)
        setScroll(0)
      } else {
        setScroll(width + 120)
        setScroll(scroll + 120)
        console.log('hello form else', scroll + width)
      }

      console.log(scroll)
      console.log(width)
    }, 2000)
    return () => clearInterval(timeIter)
  })
  return (
    <div className={styles.container}>
      <h1>Our Patners</h1>

      <div ref={containerRef} className={styles.imgContainer}>
        {/* <span className={styles.right} onClick={() => setScroll(width + 120)}>
          <ChevronUp />
        </span>
        <span className={styles.left} onClick={() => setScroll(width - 120)}>
          <ChevronDown />
        </span> */}
        {imgArray.map((img) => {
          return (
            <img
              style={{ transform: `translateX(-${scroll}px)` }}
              src={img}
              alt=''
            />
          )
        })}
      </div>
    </div>
  )
}
