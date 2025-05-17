import { useCallback, useState } from "react"
import GuessInput from "../GuessInput/GuessInput"
import GuessResult from "../GuessResult"
import { sample } from "../../utils"
import { WORDS } from "../../data"
import { NUM_OF_GUESSES_ALLOWED } from "../../constant"
import GameOverBanner from "../GameOverBanner"

const answer = sample(WORDS)
const Game = () => {
  const [guesses,setGuesses] = useState([]);
  const [gameStatus,setGameStatus] = useState('running');
  const handleSubmitGuess = useCallback((guess)=>{
    setGuesses(prev=> [...prev,guess])
    if(guess?.toUpperCase() === answer){
      setGameStatus('won')
    }else if(guesses?.length >= NUM_OF_GUESSES_ALLOWED - 1){
      setGameStatus('lost')
    }
  },[guesses?.length])
  return (
    <>
    {gameStatus}
        <GuessResult guesses={guesses} answer={answer} />
        <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
      {gameStatus !== 'running' && <GameOverBanner gameStatus={gameStatus} guessesLength={guesses?.length} answer={answer}/>}
    </> 
  )
}

export default Game