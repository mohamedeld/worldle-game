import { NUM_OF_GUESSES_ALLOWED } from "../constant"
import { range } from "../utils"
import Guess from "./Guess"

const GuessResult = ({guesses,answer}) => {
  return (
    <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED)?.map((item)=>{
            return (
                    <Guess value={guesses[item]} key={crypto.randomUUID()} answer={answer}/>
            )
        })}
    </div>
  )
}

export default GuessResult