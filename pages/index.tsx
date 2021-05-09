import styled from 'styled-components'

import { Nanogram } from '../components/organisms/Nanogram'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default function Home() {

  return (
    <Wrapper>
      <Center>
        <Nanogram />
      </Center>
    </Wrapper>
  )
}
