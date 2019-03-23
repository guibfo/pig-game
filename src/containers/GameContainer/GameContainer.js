import React, { useState } from 'react'
import { PlayerPanel, Button, Dice } from '../../components'
import { Wrapper } from './styled'
import Roll from 'react-ionicons/lib/IosSync'
import Hold from 'react-ionicons/lib/IosDownloadOutline'

const GameContainer = () => {
  const [state, setState] = useState({ dice: 0 })

  const handleDiceRoll = () => {
    setState(state => ({ dice: Math.floor(Math.random() * 6) + 1 }))
  }

  return (
    <Wrapper>
      <PlayerPanel />
      {state.dice !== 0 && (
        <Dice value={state.dice} />
      )}
      <Button onClick={handleDiceRoll} position='70%'>
        <Roll color='#eb4d4d' fontSize='32px' />
        Roll dice
      </Button>
      <Button position='80%'>
        <Hold color='#eb4d4d' fontSize='32px' />
        Hold
      </Button>
      <PlayerPanel />
    </Wrapper>
  )
}

export default GameContainer
