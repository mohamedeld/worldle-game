import { checkGuess } from "../gameHelper"
import { range } from "../utils"

const Guess = ({value,answer}) => {
  const result = checkGuess(value,answer);
  return (
    <div className='guess'>
        {range(5)?.map((item)=>{
          const className= result ? `cell ${result?.[item]?.status}` : `cell`
            return (
                <span className={className} key={crypto.randomUUID()}>{result ? result[item]?.letter:undefined}</span>
            )
        })}
    </div>
  )
}

export default Guess