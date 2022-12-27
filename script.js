// taking all the required html elements
const diceEl = document.querySelector('.dice');
const newGameEl = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.querySelector('#current--0') 
const currentScore1El = document.querySelector('#current--1') 
const totalScore0El = document.querySelector('#score--0')
const totalScore1El = document.querySelector('#score--1')
const activePlayer0El = document.querySelector('.player--0')
const activePlayer1El = document.querySelector('.player--1')

let playing = true;
// score
const scores = [0,0];
let currentScore = 0 ;
let activePlayer = 0 ;
// adding hidden class on dice initially
diceEl.classList.add('hidden');

// switching function
function switching(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0 ;
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    activePlayer0El.classList.toggle('player--active');
    activePlayer1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',() => {
   if(playing){
   const randomDice = Math.trunc(Math.random()*6) + 1
   
   // showing dice on user screen
   diceEl.classList.remove('hidden');

   diceEl.src=`dice-${randomDice}.png`;

   // checking for 1
   if(randomDice!==1){
    currentScore = currentScore + randomDice ;
    console.log(currentScore);
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   }
   else{
    //switching the player
    switching();
}
}
})

// Hold button functionality
btnHold.addEventListener('click',()=>{
    // add current score to active player
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // Checking if player win 
    if(scores[activePlayer] >= 10){
     playing = false
     document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
     document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
    switching();
    }
}   
})
newGameEl.addEventListener('click',() =>{
    window.location.reload();
})
