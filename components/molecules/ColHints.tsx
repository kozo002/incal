import * as React from 'react'
import { useMemo, useCallback } from 'react'
import styled from 'styled-components'
import { useSetRecoilState } from 'recoil'

import { activeLinesVisibilityState } from '../../recoil/atoms/activeLinesVisibility'
import { activeCellState } from '../../recoil/atoms/activeCell'
import variables from '../../styles/variables.json'

const Container = styled.div`
  display: flex;
  position: relative;
  left: 1px;
  z-index: 10;
  width: 100%;
  height: 100%;
`

const ColCell = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: ${variables.cell.size}px;
  height: 100%;
  font-size: 9px;
  text-align: center;
  letter-spacing: 1px;

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

export const ColHints = React.memo((props: {
  length: number
}) => {
  const setActiveCell = useSetRecoilState(activeCellState)
  const setActiveLinesVisivility = useSetRecoilState(activeLinesVisibilityState)

  const { cols, mouseEnterCallbacks } = useMemo(() => {
    const cols = Array.from({ length: props.length }, (_, i) => i)
    const mouseEnterCallbacks = Array.from({ length: props.length }, (_, i) => {
      return () => {
        setActiveCell(() => {
          return {
            row: undefined,
            col: i
          }
        })
      }
    })
    return { cols, mouseEnterCallbacks }
  }, [props.length, setActiveCell])

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
      {cols.map((i) => {
        return (
          <ColCell
            key={i}
            onMouseEnter={mouseEnterCallbacks[i]}
          >
            0 1 2 3 4 5
          </ColCell>
        )
      })}
    </Container>
  )
})
