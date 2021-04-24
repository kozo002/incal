import * as React from 'react'

import { Grid } from '../molecules/Grid'
import { Cell } from '../molecules/Cell'

type Props = {}

export const Nanogram = React.memo((props: Props) => {
  return (
    <div>
      <Grid
        rows={50}
        cols={50}
        renderCell={(row, col) => {
          return (
            <Cell
              key={`cell-${row}-${col}`}
              state={col % 2 === 0 ? 'drawn' : 'space'}
            />
          )
        }}
      />
    </div>
  )
})
