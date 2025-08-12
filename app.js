 let userScore = 0 ;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");

 const msg = document.querySelector("#msg");

 const showUserScore = document.querySelector("#user-score");
 const showCompScore = document.querySelector("#comp-score");

 const gencomChoice = () => {
   const options = ["stone","paper","scissor"];
   const optidx = Math.floor(Math.random() * 3);
   return options[optidx] ;
 }

 const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "game was draw" ;
  msg.style.backgroundColor = " rgb(7, 7, 50)" ;
 } 


 let showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    console.log("you win") ;
    msg.innerText = 'You win! your '+userChoice+" beats "+compChoice;
    msg.style.backgroundColor = "green" ;
    userScore += 1 ;
    showUserScore.innerText = userScore ;
  }
  else{
    console.log("you lose") ;
    msg.innerText = "you lost "+compChoice+" beats your "+userChoice ;
    msg.style.backgroundColor = "red" ;
    compScore += 1 ;
    showCompScore.innerText = compScore ;
  }
 } 
 const playgame = (userChoice) => {
   console.log("user choice =", userChoice);
   const compChoice = gencomChoice();
   console.log("compuetr choice =",compChoice);
   if(userChoice === compChoice){
    drawGame();
   }
   else{
    let userWin = true ;
    if(userChoice === "stone") {
      userWin = compChoice === "paper" ? false : true ;
        }
    else if (userChoice === "paper"){
      userWin = compChoice === "stone" ? true : false ;
    }
    else{
      userWin = compChoice === "stone" ? false : true ;
    }
    showWinner(userWin, userChoice, compChoice) ;
   }
    } ;
 

 choices.forEach((choice) => {
   choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
   });
 });