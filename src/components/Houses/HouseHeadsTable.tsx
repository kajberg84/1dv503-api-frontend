/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { Column, useTable } from 'react-table'

interface HouseHead {
  head_name: string
  gender: string
  species: string
  wizard: number | string
  patronus: string
  image: string
  house: string
  founder: string
  ghost: string
  animal: string
  element: string
  first_color: string
  second_color: string
}

type Props = {
  houseHeads: Array<HouseHead>
}

function HouseHeadsTable({ houseHeads }: Props) {
  const cols: Column<HouseHead>[] = [
    {
      Header: 'Head',
      columns: [
        { Header: 'Name', accessor: 'head_name' },
        { Header: 'Gender', accessor: 'gender' },
        { Header: 'Species', accessor: 'species' },
        { Header: 'Wizard', accessor: 'wizard' },
        { Header: 'Patronus', accessor: 'patronus' },
        {
          Header: 'Image',
          accessor: 'image',
          // eslint-disable-next-line react/prop-types
          Cell: ({ value }) =>
            value ? <img src={value} alt="Character portrait" width={70} /> : null
        }
      ]
    },
    {
      Header: 'House',
      columns: [
        { Header: 'House', accessor: 'house' },
        { Header: 'Founder', accessor: 'founder' },
        { Header: 'Ghost', accessor: 'ghost' },
        { Header: 'Animal', accessor: 'animal' },
        { Header: 'Element', accessor: 'element' },
        { Header: 'First color', accessor: 'first_color' },
        { Header: 'Second color', accessor: 'second_color' }
      ]
    }
  ]

  const data = useMemo(
    () =>
      houseHeads.map(houseHead => {
        return {
          head_name: houseHead.head_name,
          gender: houseHead.gender === 'female' ? '\u2640' : '\u2642',
          species: houseHead.species,
          wizard: houseHead.wizard ? 'true' : 'false',
          patronus: houseHead.patronus,
          image: houseHead.image,
          house: houseHead.house,
          founder: houseHead.founder,
          ghost: houseHead.ghost,
          animal: houseHead.animal,
          element: houseHead.element,
          first_color: houseHead.first_color,
          second_color: houseHead.second_color
        }
      }),
    [houseHeads]
  )

  const columns: Column<HouseHead>[] = useMemo(() => cols, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  })

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px white', width: '100%' }}>
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
                  fontWeight: 'bold',
                  padding: '5px 10px'
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

export default HouseHeadsTable
