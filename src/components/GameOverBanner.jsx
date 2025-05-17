
const GameOverBanner = ({gameStatus,guessesLength,answer}) => {
    if(gameStatus === 'won'){
        return (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in {" "}
                    <strong>{guessesLength === 1 ? `1 guess` : `${guessesLength} guesses`} guesses</strong>
                </p>
            </div>
        )
    }else{

        return (
          <div className='sad banner'>
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
        )
    }
}

export default GameOverBanner