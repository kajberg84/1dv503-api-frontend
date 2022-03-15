import React, { useState } from 'react'
import Select from 'react-select'
import {
  getHouseCharacters,
  getOthers,
  getStaff,
  getStudents,
  searchByName
} from '../../api/apiCalls'
import styles from './Characters.module.css'
import CharacterTable from './CharacterTable'

function Characters() {
  const [data, setData] = useState(null)
  const [input, setInput] = useState('')
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

  const handleGetStudents = async () => {
    const result = await getStudents()
    setData(result.data)
  }

  const handleGetStaff = async () => {
    const result = await getStaff()
    setData(result.data)
  }

  const handleGetOthers = async () => {
    const result = await getOthers()
    setData(result.data)
  }

  const handleSearch = async () => {
    const result = await searchByName(input)
    setData(result.data)
  }

  const handleGetHouseData = async (selectedOption: any) => {
    const result = await getHouseCharacters(selectedOption.value)
    setData(result.data)
  }

  return (
    <>
      <h3>Character options</h3>
      <div className={styles.optionsContainer}>
        <div>Students</div>
        <div>Staff</div>
        <div>Others</div>
        <div>Search by name:</div>
        <div>Characters per house</div>
        <button type="button" className={styles.button} onClick={handleGetStudents}>
          Show
        </button>
        <button type="button" className={styles.button} onClick={handleGetStaff}>
          Show
        </button>
        <button type="button" className={styles.button} onClick={handleGetOthers}>
          Show
        </button>
        <div className={styles.searchContainer}>
          <input
            type="text"
            name="character-search"
            id={styles.searchField}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" className={styles.button} onClick={handleSearch}>
            Search
          </button>
        </div>
        <Select options={houses} styles={customStyles} onChange={handleGetHouseData} />
      </div>
      {data && (
        <div className={styles.tableContainer}>
          <CharacterTable characters={data} />
        </div>
      )}
    </>
  )
}

export default Characters
