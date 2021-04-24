import * as React from 'react'
import styled from 'styled-components'

import { IconTimes } from '../atoms/icons/IconTimes'

type ContainerProps = {
  drawn: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 9px;
  line-height: 1;
  background-color: ${props => props.drawn ? '#5f5f5f' : '#fff'};
`

type Props = {
  state: 'blank' | 'drawn' | 'space'
}

export const Cell = React.memo((props: Props) => {
  return (
    <Container drawn={props.state === 'drawn'}>
      {props.state === 'space' && (
        <IconTimes />
      )}
    </Container>
  )
})
