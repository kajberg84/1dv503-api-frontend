import React from 'react'
import styles from './ViewSwitchers.module.css'

type Props = {
  toggleViewHouses: () => void
  toggleViewCharacters: () => void
}

function ViewSwitchers({ toggleViewHouses, toggleViewCharacters }: Props) {
  return (
    <div className={styles.container}>
      <button className={styles.button} type="button" onClick={() => toggleViewHouses()}>
        Houses
      </button>
      <button className={styles.button} type="button" onClick={() => toggleViewCharacters()}>
        Characters
      </button>
    </div>
  )
}

export default ViewSwitchers
