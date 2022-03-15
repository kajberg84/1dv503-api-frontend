/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { Column, useTable } from 'react-table'

interface House {
  name: string
  total_students: number
}

type Props = {
  houses: Array<House>
}

function TotalStudentsTable({ houses }: Props) {
  const cols: Column<House>[] = [
    { Header: 'House', accessor: 'name' },
    { Header: 'Total students', accessor: 'total_students' }
  ]

  const data = useMemo(
    () =>
      houses.map(house => {
        return {
          name: house.name,
          total_students: house.total_students
        }
      }),
    [houses]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default TotalStudentsTable
