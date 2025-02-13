// Comuter function choice is random and return string values
function getComputerChoice() {
    let hands = ['Rock', 'Paper', 'Scissor']
    const randomIndex = Math.floor(Math.random() * hands.length);
    const randomValue = Math.random();

    return{ choice: hands[randomIndex],  
        randomValue: randomValue 
    };   
    
}
console.log(getComputerChoice());

// User Function choice will be off the strings that user picks
function getUserChoice(userInput){
    if(userInput === 'Rock' || userInput === 'Paper'
        || userInput === 'Scissor'){
            return userInput;
        }else{
        return 'Invalid choice. Please pick Rock, Paper, or Scissor';

    }    
}        
// Tracks  score function between user and computer
function Scoretrack(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        return 'Tie!';
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissor') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        return 'You Win!';
    } else {
        return 'Computer wins';
    }
}

// Tracks rounds between user and the computer
function PlayRound(userInput){
    const computerpicks = getComputerChoice().choice
    const userpicks = getUserChoice(userInput);
    return Scoretrack(computerpicks, userpicks);
}

// Play game function 
function playGame(){
    for(let round= 1; round <= 5; round++){
        let userInput = prompt("Enter Rock, Paper, or Scissor");
        console.log(`Round ${round}`); 
        const result = PlayRound(userInput);
        console.log(result);
    }
}

// Round result from playing against the computer and user
function RoundResult(userInput){
    const computerResult = getComputerChoice();
    const computerChoice = computerResult.choice;

console.log('User: ${userInput}, Computer: ${computerChoice}');    
    
if(computerChoice === userInput){
    console.log('It is a Tie');
} else if(
    (userInput === 'Rock' && computerChoice === 'Scissor') ||
    (userInput === 'Paper' && computerChoice === 'Rock') ||
    (userInput === 'Scissor' && computerChoice === 'Paper')
){
console.log('You Win!');    
}else {
console.log('Computer win!')      
}    

}
