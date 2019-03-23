import React from 'react'
import PropTypes from 'prop-types'
import { CurrentScore, PlayerName, PlayerScore } from '../../components'
import { Wrapper } from './styled'

const PlayerPanel = props => {
  return (
    <Wrapper>
      <PlayerName>Player</PlayerName>
      <PlayerScore>0</PlayerScore>
      <CurrentScore />
    </Wrapper>
  )
}

PlayerPanel.propTypes = {

}

export default PlayerPanel
