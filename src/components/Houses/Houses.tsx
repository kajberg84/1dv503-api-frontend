import React, { useState } from 'react'
import Select from 'react-select'
import { getHouseData, getHouseHeads, getTotalStudents } from '../../api/apiCalls'
import styles from './Houses.module.css'

function Houses() {
  const [data, setData] = useState(null)
  const houses = [
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

  const handleGetHouseData = async (selectedOption: any) => {
    const result = await getHouseData(selectedOption.value)
    console.log(result.data)
  }

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
        <div>Students in house</div>
        <button type="button" className={styles.button} onClick={handleGetHouseHeads}>
          Show
        </button>
        <button type="button" className={styles.button} onClick={handleGetTotalStudents}>
          Show
        </button>
        <Select options={houses} styles={customStyles} onChange={handleGetHouseData} />
      </div>
    </>
  )
}

export default Houses
