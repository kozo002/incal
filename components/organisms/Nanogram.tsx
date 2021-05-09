import * as React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { sizeSelector } from '../../recoil/selectors/size'

import { ActiveLines } from '../molecules/activeLines'
import { Grid, GridRow, GridCol } from '../molecules/Grid'
import { Cell } from '../molecules/Cell'

const Container = styled.div`
  position: relative;
  padding: 100px 0 0 100px;
  border: 1px solid #ccc;
`
const GridContainer = styled.div`
  margin-right: -1px;
  margin-bottom: -1px;
`

type Props = {}

export const Nanogram = React.memo((props: Props) => {
  const size = useRecoilValue(sizeSelector)

  return (
    <Container>
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
