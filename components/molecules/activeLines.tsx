import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import { activeCellState } from '../../recoil/atoms/activeCell'
import { sizeState } from '../../recoil/atoms/size'

const Container = styled.div`
  position: relative;
`

const lineCommonStyle = `
  position: absolute;
  z-index: 1;
  opacity: 0.25;
  background-color: blue;
`

const YLine = styled.div`
  ${lineCommonStyle}
  top: 0;
  width: 10px;
  height: 100%;
`

const XLine = styled.div`
  ${lineCommonStyle}
  left: 0;
  width: 100%;
  height: 10px;
`

const GridContainer = styled.div`
  position: relative;
  z-index: 2;
`

type Props = {}

export const ActiveLines: React.FC<Props> = (props) => {
  const activeCell = useRecoilValue(activeCellState)
  const size = useRecoilValue(sizeState)

  return (
    <Container style={{ width: `${size.cols * 10}px` }}>
      <YLine style={{ left: `${activeCell.col * 10}px` }} />
      <XLine style={{ top: `${activeCell.row * 10}px` }} />
      <GridContainer>
        {props.children}
      </GridContainer>
    </Container>
  )
}