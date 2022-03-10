import React, { useState } from 'react'
import { getOthers, getStaff, getStudents, searchByName } from '../../api/apiCalls'
import styles from './Characters.module.css'
import CharacterTable from './CharacterTable'

function Characters() {
  const [data, setData] = useState(null)
  const [input, setInput] = useState('')

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

  return (
    <>
      <h3>Character options</h3>
      <div className={styles.optionsContainer}>
        <div>Hogwarts students</div>
        <div>Hogwarts staff</div>
        <div>Others</div>
        <div>Search by name:</div>
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
