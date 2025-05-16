import { range } from "../utils"

const Guess = ({value}) => {
  return (
    <div className='guess'>
        {range(5)?.map((item)=>{
            return (
                <span className="cell" key={crypto.randomUUID()}>{value ? value[item]:undefined}</span>
            )
        })}
    </div>
  )
}

export default Guess