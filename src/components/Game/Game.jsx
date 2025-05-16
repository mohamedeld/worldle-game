import { useCallback, useState } from "react"
import GuessInput from "../GuessInput/GuessInput"
import GuessResult from "../GuessResult"

const Game = () => {
  const [guesses,setGuesses] = useState([]);

  const handleSubmitGuess = useCallback((guess)=>{
    setGuesses(prev=> [...prev,guess])
  },[])
  return (
    <>
        <GuessResult guesses={guesses}/>
        <GuessInput handleSubmitGuess={handleSubmitGuess}/>

    </>
  )
}

export default Game