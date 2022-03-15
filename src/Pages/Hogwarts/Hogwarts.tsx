import React, { useState } from 'react'
import Characters from '../../components/Characters/Characters'
import Houses from '../../components/Houses/Houses'
import ViewSwitchers from '../../components/ViewSwitchers/ViewSwitchers'
import castleImg from './hogwarts-castle.png'
import styles from './Hogwarts.module.css'

const Hogwarts = () => {
  const [showViewBtns, setShowViewBtns] = useState(true)
  const [viewHouses, setViewHouses] = useState(false)
  const [viewCharacters, setViewCharacters] = useState(false)

  const toggleViewBtns = () => {
    setShowViewBtns(!showViewBtns)
  }

  const toggleViewHouses = () => {
    setViewHouses(!viewHouses)
    toggleViewBtns()
  }

  const toggleViewCharacters = () => {
    setViewCharacters(!viewCharacters)
    toggleViewBtns()
  }

  const handleBackBtn = () => {
    toggleViewBtns()
    setViewHouses(false)
    setViewCharacters(false)
  }

  return (
    <div className={styles.container}>
      {!showViewBtns && (
        <button className={styles.backBtn} type="button" onClick={() => handleBackBtn()}>
          ←
        </button>
      )}
      <div className={styles.wrapper}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Hogwarts Wiki</h1>
          {showViewBtns && (
            <ViewSwitchers
              toggleViewHouses={toggleViewHouses}
              toggleViewCharacters={toggleViewCharacters}
            />
          )}
        </div>
        <div className={styles.dataContainer}>
          {viewHouses && <Houses />}
          {viewCharacters && <Characters />}
        </div>
      </div>
      <img className={styles.bgImage} src={castleImg} alt="Hogwarts castle" />
    </div>
  )
}

export default Hogwarts
