import styles from './index.module.css'
import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const targetDate = new Date('December 31, 2023 23:59:59')
  const calculateTimeRemaining = () => {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    if (difference <= 0) {
      // clearInterval(intervalId)
      setTimerExpired(true)
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      })
    }
  }

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [timerExpired, setTimerExpired] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])
  const min = countdown.minutes

  return (
    <div className={styles.timerContainer}>
      {timerExpired ? (
        <p>The event has ended!</p>
      ) : (
        <div className={styles.timer}>
          <h3>
            {countdown.days} <span>days</span>
          </h3>
          <span>:</span>
          <h3>
            {' '}
            {countdown.hours} <span>hrs</span>
          </h3>
          <span>:</span>
          <h3>
            {min.toString().slice(0, 2)} <span>mins</span>
          </h3>
          <span>:</span>
          <h3>
            {' '}
            {countdown.seconds} <span>sec</span>
          </h3>
        </div>
      )}
    </div>
  )
}

export default CountdownTimer
