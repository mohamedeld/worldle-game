import { useState } from "react";

const GuessInput = ({handleSubmitGuess}) => {
  const [guess,setGuess] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess('');
  }
  
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" required minLength={3} maxLength={5} type="text" value={guess} onChange={(e)=> setGuess(e.target.value.toUpperCase())} />
    </form>
  );
};

export default GuessInput;
