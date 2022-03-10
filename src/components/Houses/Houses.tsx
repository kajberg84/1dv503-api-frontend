import React, { useState } from 'react'
import { getHouseHeads, getTotalStudents } from '../../api/apiCalls'
import styles from './Houses.module.css'

function Houses() {
  const [data, setData] = useState(null)

  const handleGetHouseHeads = async () => {
    const result = await getHouseHeads()
    console.log(result.data)
  }

  const handleGetTotalStudents = async () => {
    const result = await getTotalStudents()
    console.log(result.data)
  }

  return (
    <>
      <h3>House options</h3>
      <div className={styles.optionsContainer}>
        <div>House heads</div>
        <div>Total students per house</div>
        {/* <div>Students in house</div> */}
        <button type="button" className={styles.button} onClick={handleGetHouseHeads}>
          Show
        </button>
        <button type="button" className={styles.button} onClick={handleGetTotalStudents}>
          Show
        </button>
        {/* <Select options={houses} styles={customStyles} onChange={handleGetHouseData} /> */}
      </div>
    </>
  )
}

export default Houses
