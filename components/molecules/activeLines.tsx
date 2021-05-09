import * as React from 'react'
import { useState, useCallback } from 'react'
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
  const [isVisible, setVisible] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setVisible(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <Container style={{ width: `${size.cols * 10}px` }}>
      {isVisible && <YLine style={{ left: `${activeCell.col * 10}px` }} />}
      {isVisible && <XLine style={{ top: `${activeCell.row * 10}px` }} />}
      <GridContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.children}
      </GridContainer>
    </Container>
  )
}