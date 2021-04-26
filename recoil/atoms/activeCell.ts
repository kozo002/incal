import { atom } from 'recoil'

export const activeCellState = atom({
  key: 'activeCell',
  default: {
    row: 0,
    col: 0
  }
})
