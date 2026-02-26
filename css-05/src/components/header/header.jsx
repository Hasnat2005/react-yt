import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
      <h3>Hasnat Ashraf <button className={styles.btn}>Click Me</button></h3>

    </div>
  )
}

export default header
