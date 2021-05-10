import type { ReactNode } from 'react'
import { useMemo, useCallback, memo } from 'react'
import styled from 'styled-components'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { activeLinesVisibilityState } from '../../recoil/atoms/activeLinesVisibility'
import { activeCellState } from '../../recoil/atoms/activeCell'
import { sizeState } from '../../recoil/atoms/size'
import variables from '../../styles/variables.json'

const Container = styled.div`
  position: relative;
`

const lineCommonStyle = `
  position: absolute;
  z-index: 1;
  opacity: 0.25;
  background-color: rgba(0,0,255,.5);
`

const YLine = styled.div`
  ${lineCommonStyle}
  bottom: 0;
  width: ${variables.cell.size}px;
  height: calc(100% + 2000px);
`

const XLine = styled.div`
  ${lineCommonStyle}
  right: 0;
  width: calc(100% + 2000px);
  height: ${variables.cell.size}px;
`

const GridContainer = styled.div`
  position: relative;
  z-index: 2;
`

type Props = {
  children: ReactNode
}

export const ActiveLines = memo((props: Props) => {
  const activeCell = useRecoilValue(activeCellState)
  const size = useRecoilValue(sizeState)
  const isVisible = useRecoilValue(activeLinesVisibilityState)
  const setActiveLinesVisibility = useSetRecoilState(activeLinesVisibilityState)

  const containerStyle = useMemo(() => {
    return { width: `${size.cols * variables.cell.size}px` }
  }, [size.cols])

  const yLineStyle = useMemo(() => {
    return { left: `${activeCell.col * variables.cell.size}px` }
  }, [activeCell.col])

  const xLineStyle = useMemo(() => {
    return { top: `${activeCell.row * variables.cell.size}px` }
  }, [activeCell.row])

  const handleMouseEnter = useCallback(() => {
    setActiveLinesVisibility(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveLinesVisibility(false)
  }, [])

  return (
    <Container style={containerStyle}>
      {isVisible && activeCell.col !== undefined && <YLine style={yLineStyle} />}
      {isVisible && activeCell.row !== undefined && <XLine style={xLineStyle} />}
      <GridContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.children}
      </GridContainer>
    </Container>
  )
})
