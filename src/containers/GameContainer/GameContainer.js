import React, { useState, useEffect } from 'react'
import { PlayerPanel, Button, Dice } from '../../components'
import { Wrapper } from './styled'
import Roll from 'react-ionicons/lib/IosSync'
import Hold from 'react-ionicons/lib/IosDownloadOutline'
import Help from 'react-ionicons/lib/IosHelpCircleOutline'

const GameContainer = () => {
  const [state, setState] = useState({
    dice: 0,
    activePlayer: 0,
    targetScore: 100,
    players: [
      {
        name: 'Player 1',
        totalScore: 0,
        currentScore: 0
      },
      {
        name: 'Player 2',
        totalScore: 0,
        currentScore: 0
      }
    ]
  })

  useEffect(() => {
    if (state.dice !== 0) {
      checkWinCondition()
    }
  }, [state.players[0].totalScore, state.players[1].totalScore])

  const handleDiceRoll = () => {
    const diceValue = Math.floor(Math.random() * 6) + 1

    setState(state => ({
      ...state,
      dice: diceValue
    }))

    if (diceValue === 1) {
      nextPlayer()
    } else {
      setState(state => ({
        ...state,
        players: {
          ...state.players,
          [state.activePlayer]: {
            ...state.players[state.activePlayer],
            currentScore: state.players[state.activePlayer].currentScore + diceValue
          }
        }
      }))
    }
  }

  const nextPlayer = () => {
    const activePlayer = state.activePlayer === 0 ? 1 : 0

    setState(state => ({
      ...state,
      activePlayer: activePlayer,
      players: {
        ...state.players,
        [state.activePlayer]: {
          ...state.players[state.activePlayer],
          currentScore: 0
        }
      }
    }))
  }

  const handleSaveScore = () => {
    setState(state => ({
      ...state,
      players: {
        ...state.players,
        [state.activePlayer]: {
          ...state.players[state.activePlayer],
          totalScore: state.players[state.activePlayer].totalScore + state.players[state.activePlayer].currentScore
        }
      }
    }))
  }

  const checkWinCondition = () => {
    if (state.players[state.activePlayer].totalScore >= state.targetScore) {
      console.log(`Player ${state.activePlayer} won the game`)
    } else {
      nextPlayer()
    }
  }

  const resetGame = () => {
    setState(state => ({
      ...state,
      dice: 0,
      activePlayer: 0,
      players: {
        0: {
          ...state.players[0],
          totalScore: 0
        },
        1: {
          ...state.players[1],
          totalScore: 0
        }
      }
    }))
  }

  return (
    <Wrapper>
      <PlayerPanel
        active={state.activePlayer === 0}
        playerName={state.players[0].name}
        totalScore={state.players[0].totalScore}
        currentScore={state.players[0].currentScore}
      />
      {state.dice !== 0 && (
        <Dice value={state.dice} />
      )}
      <Button onClick={handleDiceRoll} position={['70%']}>
        <Roll color='#eb4d4d' fontSize='32px' />
        Roll dice
      </Button>
      <Button onClick={handleSaveScore} position={['80%']}>
        <Hold color='#eb4d4d' fontSize='32px' />
        Hold
      </Button>
      <PlayerPanel
        active={state.activePlayer === 1}
        playerName={state.players[1].name}
        totalScore={state.players[1].totalScore}
        currentScore={state.players[1].currentScore}
      />
      <Button position={['90%', '95%']}>
        <Help color='#eb4d4d' fontSize='40px' />
      </Button>
    </Wrapper>
  )
}

export default GameContainer
