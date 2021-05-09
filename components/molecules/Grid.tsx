import * as React from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

import variales from '../../styles/variables.json'

const borderColor = '#ccc'
const emphasizedBorderColor = '#999'

const emphasizingCount = 5

const Table = styled.table`
  border: 1px solid ${borderColor};
  border-collapse: collapse;
`

export const Grid = React.memo((props: {
  children: ReactNode
}) => {
  return (
    <Table>
      <tbody>
        {props.children}
      </tbody>
    </Table>
  )
})

export const GridRow = styled.tr`
  &:nth-child(${emphasizingCount}n+0) > td {
    border-bottom: 1px solid ${emphasizedBorderColor};
  }
  &:last-child > td {
    border-bottom: none;
  }
`

export const GridCol = styled.td`
  padding: 0;
  width: ${variales.cell.size}px;
  height: ${variales.cell.size}px;
  border-top: 1px solid ${borderColor};
  border-left: 1px solid ${borderColor};
  border-right: none;

  &:nth-child(${emphasizingCount}n+0) {
    border-right: 1px solid ${emphasizedBorderColor};
  }
  &:last-child {
    border-right: none;
  }
`
