import { useRecoilValue } from 'recoil'

import { activeCellState } from '../recoil/atoms/activeCell'

import { ActiveLines } from '../components/molecules/activeLines'
import { Nanogram } from '../components/organisms/Nanogram'

export default function Home() {
  const activeCell = useRecoilValue(activeCellState)

  return (
    <div>
      <ActiveLines>
        <Nanogram />
      </ActiveLines>
      {activeCell.row}, {activeCell.col}
    </div>
  )
}
