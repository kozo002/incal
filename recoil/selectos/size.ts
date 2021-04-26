import { selector } from 'recoil'

import { sizeState } from '../atoms/size'

export const sizeSelector = selector({
  key: 'sizeSelector',
  get: ({ get }) => {
    const size = get(sizeState)
    const rows = Array.from({ length: size.rows }, (_, i) => i)
    const cols = Array.from({ length: size.cols }, (_, i) => i)
    console.log(rows,cols)
    return { rows, cols }
  }
})