import * as React from 'react'
import { useRecoilValue } from 'recoil'

import { sizeSelector } from '../../recoil/selectos/size'

import { Grid, GridRow, GridCol } from '../molecules/Grid'
import { Cell } from '../molecules/Cell'

type Props = {}

export const Nanogram = React.memo((props: Props) => {
  const size = useRecoilValue(sizeSelector)

  return (
    <div>
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
    </div>
  )
})
