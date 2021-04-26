import * as React from 'react'
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

export const Grid: React.FC = (props) => {
  return (
    <Table>
      <tbody>
        {props.children}
      </tbody>
    </Table>
  )
}

export const GridRow: React.FC = (props) => {
  return (
    <tr>
      {props.children}
    </tr>
  )
}

export const GridCol: React.FC = (props) => {
  return (
    <Td>
      {props.children}
    </Td>
  )
}
