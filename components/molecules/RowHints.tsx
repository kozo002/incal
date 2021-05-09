import * as React from 'react'
import { useMemo, useCallback } from 'react'
import styled from 'styled-components'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { activeLinesVisibilityState } from '../../recoil/atoms/activeLinesVisibility'
import { activeCellState } from '../../recoil/atoms/activeCell'
import variables from '../../styles/variables.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 1px;
  z-index: 10;
  width: 100%;
  height: 100%;
`

const RowCell = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: ${variables.cell.size}px;
  font-size: 9px;
  text-align: right;
  letter-spacing: 1px;

  &::before {
    content: '';
    position: absolute;
    top: -0.5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }

  &:nth-child(5n+1)::before {
    background-color: #999;
  }
  &:first-child::before {
    background-color: #ccc;
  }
`

export const RowHints = (props: {
  length: number
}) => {
  const [activeCell] = useRecoilState(activeCellState)
  const setActiveCell = useSetRecoilState(activeCellState)
  const setActiveLinesVisivility = useSetRecoilState(activeLinesVisibilityState)

  const { rows, mouseEnterCallbacks } = useMemo(() => {
    const rows = Array.from({ length: props.length }, (_, i) => i)
    const mouseEnterCallbacks = Array.from({ length: props.length }, (_, i) => {
      return () => {
        setActiveCell(() => {
          return {
            row: i,
            col: undefined
          }
        })
      }
    })
    return { rows, mouseEnterCallbacks }
  }, [props.length, activeCell, setActiveCell])

  const handleContainerMouseEnter = useCallback(() => {
    setActiveLinesVisivility(true)
  }, [setActiveLinesVisivility])
  const handleContainerMouseLeave = useCallback(() => {
    setActiveLinesVisivility(false)
  }, [setActiveLinesVisivility])

  return (
    <Container
      onMouseEnter={handleContainerMouseEnter}
      onMouseLeave={handleContainerMouseLeave}
    >
      {rows.map((i) => {
        return (
          <RowCell
            key={i}
            onMouseEnter={mouseEnterCallbacks[i]}
          >
            0 1 2 3 4 5
          </RowCell>
        )
      })}
    </Container>
  )
}