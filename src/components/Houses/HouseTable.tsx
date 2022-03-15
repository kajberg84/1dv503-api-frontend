/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { Column, useTable } from 'react-table'

interface House {
  house: string
  head: string
  founder: string
  ghost: string
  animal: string
  element: string
  first_color: string
  second_color: string
  house_id?: 2
}

type Props = {
  houses: Array<House>
}

function HouseTable({ houses }: Props) {
  const cols: Column<House>[] = [
    { Header: 'House', accessor: 'house' },
    { Header: 'Head', accessor: 'head' },
    { Header: 'Founder', accessor: 'founder' },
    { Header: 'Ghost', accessor: 'ghost' },
    { Header: 'Animal', accessor: 'animal' },
    { Header: 'Element', accessor: 'element' },
    { Header: 'First color', accessor: 'first_color' },
    { Header: 'Second color', accessor: 'second_color' }
  ]

  const data = useMemo(
    () =>
      houses.map(house => {
        return {
          house: house.house,
          head: house.head,
          founder: house.founder,
          ghost: house.ghost,
          animal: house.animal,
          element: house.element,
          first_color: house.first_color,
          second_color: house.second_color
        }
      }),
    [houses]
  )

  const columns: Column<House>[] = useMemo(() => cols, [])

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

export default HouseTable
