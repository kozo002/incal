import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'

const borderColor = '#ccc'
const Table = styled.table`
  border: 1px solid ${borderColor};
  border-collapse: collapse;
`
const Td = styled.td`
  padding: 0;
  width: 10px;
  height: 10px;
  border: 1px solid ${borderColor};
`

type Props = {
  rows: number
  cols: number
  renderCell: (row: number, col: number) => React.ReactChild
}

export const Grid = React.memo((props: Props) => {
  const rows = useMemo(() =>
    Array.from({ length: props.rows }, (_, i) => i),
    [props.rows]
  )
  const cols = useMemo(() =>
    Array.from({ length: props.cols }, (_, i) => i),
    [props.cols]
  )

  return (
    <Table>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={`row-${row}`}>
              {cols.map((col) => {
                return (
                  <Td key={`row-${row}-col-${col}`}>
                    {props.renderCell(row, col)}
                  </Td>
                )
              })}
            </tr>
          )
        })}      
      </tbody>
    </Table>
  )
})
