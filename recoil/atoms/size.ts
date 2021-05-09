import { atom } from 'recoil'

export const sizeState = atom({
  key: 'size',
  default: {
    rows: 40,
    cols: 40
  }
})
