import React from 'react'
import PropTypes from 'prop-types'
import { CurrentScore } from '../../components'
import {
  Wrapper,
  Name,
  TotalScore
} from './styled'

const PlayerPanel = props => {
  return (
    <Wrapper className={props.active ? 'active' : ''}>
      <Name>{props.playerName}</Name>
      <TotalScore>{props.totalScore}</TotalScore>
      <CurrentScore score={props.currentScore} />
    </Wrapper>
  )
}

PlayerPanel.propTypes = {
  active: PropTypes.bool,
  playerName: PropTypes.string,
  totalScore: PropTypes.number,
  currentScore: PropTypes.number
}

export default PlayerPanel
