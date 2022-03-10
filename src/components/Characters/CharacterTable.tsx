/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { Column, useTable } from 'react-table'

interface Character {
  name: string
  gender: string
  species: string
  wizard: number | string
  patronus: null
  house: string
  image: string
  student_id?: number
}

type Props = {
  characters: Array<Character>
}

function CharacterTable({ characters }: Props) {
  const cols: Column<Character>[] = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Gender', accessor: 'gender' },
    { Header: 'Species', accessor: 'species' },
    { Header: 'Wizard', accessor: 'wizard' },
    { Header: 'Patronus', accessor: 'patronus' },
    { Header: 'House', accessor: 'house' },
    {
      Header: 'Image',
      accessor: 'image',
      maxWidth: 70,
      minWidth: 70,
      // eslint-disable-next-line react/prop-types
      Cell: ({ value }) => (value ? <img src={value} alt="Character portrait" width={60} /> : null)
    }
  ]

  const data = useMemo(
    () =>
      characters.map(character => {
        return {
          name: character.name,
          gender: character.gender === 'female' ? '\u2640' : '\u2642',
          species: character.species,
          wizard: character.wizard ? 'True' : 'False',
          patronus: character.patronus,
          house: character.house,
          image: character.image
        }
      }),
    [characters]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns: Column<Character>[] = useMemo(() => cols, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  })
  return (
    <table {...getTableProps()} style={{ border: 'solid 1px white' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px black',
                  background: '#353746',
                  color: 'offwhite',
                  fontWeight: 'bold'
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'rgba(53, 55, 70, 0.2)'
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CharacterTable
