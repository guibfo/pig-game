import React from 'react'
import { PlayerPanel, Button } from '../../components'
import { Wrapper } from './styled'
import Roll from 'react-ionicons/lib/IosSync'
import Hold from 'react-ionicons/lib/IosDownloadOutline'

const GameContainer = () => {
  return (
    <Wrapper>
      <PlayerPanel />
      <Button position='70%'>
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
