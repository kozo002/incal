import { atom } from 'recoil'

export const sizeState = atom({
  key: 'size',
  default: {
    rows: 20,
    cols: 20
  }
})
