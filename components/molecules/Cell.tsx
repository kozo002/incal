import * as React from 'react'
import { useCallback } from 'react'
import styled from 'styled-components'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { activeCellState } from '../../recoil/atoms/activeCell';

import { IconTimes } from '../atoms/icons/IconTimes'

type ContainerProps = {
  drawn: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 9px;
  line-height: 1;
  background-color: ${props => props.drawn ? '#5f5f5f' : '#fff'};
`

type Props = {
  row: number
  col: number
  state: 'blank' | 'drawn' | 'space'
}

export const Cell = React.memo((props: Props) => {
  // const activeCell = useRecoilValue(activeCellState)
  const setActiveCell = useSetRecoilState(activeCellState)

  const handleMouseEnter = useCallback(() => {
    setActiveCell(() => {
      return {
        row: props.row,
        col: props.col
      }
    })
  }, [props.row, props.col])

  return (
    <Container
      drawn={props.state === 'drawn'}
      onMouseEnter={handleMouseEnter}
    >
      {props.state === 'space' && (
        <IconTimes />
      )}
    </Container>
  )
})
