import React, { useState } from 'react'
import Select from 'react-select'
import { getHouse, getHouseHeads, getTotalStudents } from '../../api/apiCalls'
import HouseHeadsTable from './HouseHeadsTable'
import styles from './Houses.module.css'
import HouseTable from './HouseTable'
import TotalStudentsTable from './TotalStudentsTable'

function Houses() {
  const [totalStudents, setTotalStudents] = useState(null)
  const [houseHeads, setHouseHeads] = useState(null)
  const [house, setHouse] = useState(null)

  const houseOptions = [
    { value: 'gryffindor', label: 'Gryffindor' },
    { value: 'hufflepuff', label: 'Hufflepuff' },
    { value: 'ravenclaw', label: 'Ravenclaw' },
    { value: 'slytherin', label: 'Slytherin' }
  ]

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted black',
      color: state.isFocused ? 'white' : '#353746',
      backgroundColor: state.isFocused ? '#353746' : 'white',
      padding: 20
    }),
    control: (provided: any) => ({
      ...provided,
      width: 200,
      fontSize: 14
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isFocused ? 0.5 : 1
      const transition = 'opacity 300ms'
      return { ...provided, opacity, transition }
    }
  }

  const handleGetHouse = async (selectOption: any) => {
    setTotalStudents(null)
    setHouseHeads(null)
    const result = await getHouse(selectOption.value)
    setHouse(result.data)
  }

  const handleGetHouseHeads = async () => {
    setTotalStudents(null)
    setHouse(null)
    const result = await getHouseHeads()
    setHouseHeads(result.data)
  }

  const handleGetTotalStudents = async () => {
    setHouseHeads(null)
    setHouse(null)
    const result = await getTotalStudents()
    setTotalStudents(result.data)
  }

  return (
    <>
      <h3>House options</h3>
      <div className={styles.optionsContainer}>
        <div>House information</div>
        <div>House heads</div>
        <div>Total students per house</div>
        <Select options={houseOptions} styles={customStyles} onChange={handleGetHouse} />
        <button type="button" className={styles.button} onClick={handleGetHouseHeads}>
          Show
        </button>
        <button type="button" className={styles.button} onClick={handleGetTotalStudents}>
          Show
        </button>
      </div>
      {house && (
        <div className={styles.tableContainer}>
          <HouseTable houses={house} />
        </div>
      )}
      {totalStudents && (
        <div className={styles.tableContainer}>
          <TotalStudentsTable houses={totalStudents} />
        </div>
      )}
      {houseHeads && (
        <div className={styles.tableContainer}>
          <HouseHeadsTable houseHeads={houseHeads} />
        </div>
      )}
    </>
  )
}

export default Houses
