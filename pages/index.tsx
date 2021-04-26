import { useRecoilValue } from 'recoil'

import { activeCellState } from '../recoil/atoms/activeCell'

import { Nanogram } from '../components/organisms/Nanogram'

export default function Home() {
  const activeCell = useRecoilValue(activeCellState)

  return (
    <div>
      <Nanogram />
      {activeCell.row}, {activeCell.col}
    </div>
  )
}
