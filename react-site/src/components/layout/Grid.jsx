import React from 'react'
import styles from './Grid.module.css'

export default function Grid({ children, cols = 2 }) {
  return <div className={styles[`grid${cols}`]}>{children}</div>
}
