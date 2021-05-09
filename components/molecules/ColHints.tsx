import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  left: 1px;
  width: 100%;
  height: 100%;
`

const ColCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 10px;
  height: 100%;
  font-size: 9px;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.5px;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }

  &:nth-child(5n+1)::before {
    background-color: #999;
  }
  &:first-child::before {
    left: 0;
    background-color: #ccc;
  }
`

export const ColHints = (props: {
  length: number
}) => {
  const cols = useMemo(() => {
    return Array.from({ length: props.length }, (_, i) => i)
  }, [props.length])

  return (
    <Container>
      {cols.map((i) => {
        return (
          <ColCell>
            0 1 2 3 4 5
          </ColCell>
        )
      })}
    </Container>
  )
}