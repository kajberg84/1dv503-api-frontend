import React, { useState } from 'react'
import { getHouseHeads, getTotalStudents } from '../../api/apiCalls'
import styles from './Houses.module.css'
import TotalStudentsTable from './TotalStudentsTable'

function Houses() {
  const [data, setData] = useState(null)
  const [totalStudents, setTotalStudents] = useState(null)
  const [houseHeads, setHouseHeads] = useState(null)

  const handleGetHouseHeads = async () => {
    setTotalStudents(null)
    const result = await getHouseHeads()
    console.log(result.data)
  }

  const handleGetTotalStudents = async () => {
    setHouseHeads(null)
    const result = await getTotalStudents()
    setTotalStudents(result.data)
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
      {totalStudents && (
        <div className={styles.tableContainer}>
          <TotalStudentsTable houses={totalStudents} />
        </div>
      )}
    </>
  )
}

export default Houses
