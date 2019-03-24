import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Label,
  Score
} from './styled'

const CurrentScore = props => {
  return (
    <Box>
      <Label>Current</Label>
      <Score>{props.score}</Score>
    </Box>
  )
}

CurrentScore.propTypes = {
  score: PropTypes.number
}

export default CurrentScore
