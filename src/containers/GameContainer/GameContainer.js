import React from 'react'
import { PlayerPanel } from '../../components'
import { Wrapper } from './styled'

const GameContainer = () => {
  return (
    <Wrapper>
      <PlayerPanel />
      <PlayerPanel />
    </Wrapper>
  )
}

export default GameContainer
