import * as React from 'react'
import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { sizeSelector } from '../../recoil/selectors/size'
import variables from '../../styles/variables.json'

import { ActiveLines } from '../molecules/ActiveLines';
import { Grid, GridRow, GridCol } from '../molecules/Grid'
import { Cell } from '../molecules/Cell'
import { ColHints } from '../molecules/ColHints'
import { RowHints } from '../molecules/RowHints'

const Container = styled.div`
  position: relative;
  padding: 100px 0 0 100px;
  border: 1px solid #ccc;
`
const GridContainer = styled.div`
  margin-right: -1px;
  margin-bottom: -1px;
`

const ColHintsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100px;
`

const RowHintsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
`

type Props = {}

export const Nanogram = React.memo((props: Props) => {
  const size = useRecoilValue(sizeSelector)

  const topHintsStyle = useMemo(() => {
    return { width: `${size.cols.length * variables.cell.size}px` }
  }, [size.cols])

  const leftHintsStyle = useMemo(() => {
    return { height: `${size.rows.length * variables.cell.size}px` }
  }, [size.rows])

  return (
    <Container>
      <ColHintsContainer style={topHintsStyle}>
        <ColHints length={size.cols.length} />
      </ColHintsContainer>
      <RowHintsContainer style={leftHintsStyle}>
        <RowHints length={size.rows.length} />
      </RowHintsContainer>
      <GridContainer>
        <ActiveLines>
          <Grid>
            {size.rows.map((row) => {
              return (
                <GridRow key={`row${row}`}>
                  {size.cols.map((col) => {
                    return (
                      <GridCol key={`col${col}`}>
                        <Cell
                          row={row}
                          col={col}
                          state="blank"
                        />
                      </GridCol>
                    )
                  })}
                </GridRow>
              )
            })}
          </Grid>
        </ActiveLines>
      </GridContainer>
    </Container>
  )
})
