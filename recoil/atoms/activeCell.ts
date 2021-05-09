import { atom } from 'recoil'

export const activeCellState = atom<{
  row: number | undefined
  col: number | undefined
}>({
  key: 'activeCell',
  default: {
    row: 0,
    col: 0
  }
})
