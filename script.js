let secretNumber = Math.trunc(Math.random() * 20) + 1 ;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
         document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess)
 // when there is no input
    if (!guess){
      //  document.querySelector('.message').textContent = 'No Number!'
      displayMessage('No number!')
    } else if (guess === secretNumber){
        displayMessage('Correct number!')
       // document.querySelector('.message').textContent = 'Correct number!'
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60B347'
        document.querySelector('body').style.width = '30 rem'

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }   else if (guess !==secretNumber){
        if(score > 1 ){
           displayMessage(guess > secretNumber ?'too high!':'too low !')
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game')
            //document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
    document.querySelector('.again').addEventListener('click',function(){
        score = 20;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor ='#222';
        document.querySelector('.number').style.width = '15 rem'

    })
})



