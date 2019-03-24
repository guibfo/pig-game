import React, { useState, useEffect } from 'react'
import { PlayerPanel, Button, Dice, Modal } from '../../components'
import { Wrapper, ModalTitle, ModalText, InputWrapper, ScoreInput } from './styled'
import RollIcon from 'react-ionicons/lib/IosSync'
import HoldIcon from 'react-ionicons/lib/IosDownloadOutline'
import HelpIcon from 'react-ionicons/lib/IosHelpCircleOutline'
import NewGameIcon from 'react-ionicons/lib/IosAddCircleOutline'

const GameContainer = () => {
  const [state, setState] = useState({
    dice: 0,
    activePlayer: 0,
    targetScore: 100,
    showModal: false,
    isPlayable: true,
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
    if (state.isPlayable) {
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
    if (state.isPlayable) {
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
  }

  const checkWinCondition = () => {
    if (state.players[state.activePlayer].totalScore >= state.targetScore) {
      setState(state => ({
        ...state,
        isPlayable: false,
        players: {
          ...state.players,
          [state.activePlayer]: {
            ...state.players[state.activePlayer],
            name: 'Winner'
          }
        }
      }))
    } else {
      nextPlayer()
    }
  }

  const resetGame = () => {
    setState(state => ({
      ...state,
      dice: 0,
      activePlayer: 0,
      isPlayable: true,
      players: {
        0: {
          ...state.players[0],
          name: 'Player 1',
          currentScore: 0,
          totalScore: 0
        },
        1: {
          ...state.players[1],
          name: 'Player 2',
          currentScore: 0,
          totalScore: 0
        }
      }
    }))
  }

  const changeTargetScore = (value) => {
    if (/^[0-9\b]+$/.test(value)) {
      setState(state => ({
        ...state,
        targetScore: value
      }))
    }
  }

  const toggleModal = () => {
    setState({ ...state, showModal: !state.showModal }) // This doesn't work!
  }

  const { activePlayer, players, dice, showModal, targetScore } = state
  const modalContent = (
    <>
      <ModalTitle>Game Rules</ModalTitle>
      <ModalText>-Players take turns rolling the dice</ModalText>
      <ModalText>-Each player can roll the dice as many times as (s)he wants every turn</ModalText>
      <ModalText>-Every roll is added to player's current score</ModalText>
      <ModalText>-If the player rolls a '1' his turn is over, he loses all points he accumulated that turn, and he passes the turn to the next player</ModalText>
      <ModalText>-A player can choose to 'Hold' his points and pass the turn to the next player</ModalText>
      <ModalText>-First to reach target score wins!</ModalText>
    </>
  )

  return (
    <>
      <Wrapper>
        <Button onClick={resetGame} position={['10%']}>
          <NewGameIcon color='#eb4d4d' fontSize='32px' />
          New Game
        </Button>
        <PlayerPanel
          active={activePlayer === 0}
          playerName={players[0].name}
          totalScore={players[0].totalScore}
          currentScore={players[0].currentScore}
        />
        {state.dice !== 0 && (
          <Dice value={dice} />
        )}
        <Button onClick={handleDiceRoll} position={['65%']}>
          <RollIcon color='#eb4d4d' fontSize='32px' />
          Roll dice
        </Button>
        <Button onClick={handleSaveScore} position={['75%']}>
          <HoldIcon color='#eb4d4d' fontSize='32px' />
          Hold
        </Button>
        <PlayerPanel
          active={activePlayer === 1}
          playerName={players[1].name}
          totalScore={players[1].totalScore}
          currentScore={players[1].currentScore}
        />
        <InputWrapper>
          <div>Target Score</div>
          <ScoreInput onChange={(e) => changeTargetScore(e.target.value)} type='text' value={targetScore} />
        </InputWrapper>
        <Button onClick={toggleModal} position={['90%', '95%']}>
          <HelpIcon color='#eb4d4d' fontSize='40px' />
        </Button>
      </Wrapper>
      <Modal
        isOpen={showModal}
        onClick={toggleModal}
        content={modalContent}
      />
    </>
  )
}

export default GameContainer
