// create the behaviour part
let User_score = 0;
let Cmp_score = 0;
const choice = document.querySelectorAll(".img");
const message_box = document.getElementById("Message");
const User_scorepara = document.getElementById("winner");
const Cmp_scorepara = document.getElementById("computer");

// computer genarate the randomly..
 const computer = () =>{
  const option = ["rock","paper","Scissors"];
  const index = Math.floor(Math.random() * 3);
  return  option[index];
 };

 //draw the game...
 const message = ()=>{
    Message.innerText = "game was draw ,play again";
    Message.style.backgroundColor = "black";
 };
 //create the showWinner function..
  
 const showWinner = (User_Win,imgid,computer_choice ) =>{
  if(User_Win){
   // increment the score value...
  User_score++;
  User_scorepara.innerText = User_score;
   Message.innerText = `you are win ${imgid} beats ${computer_choice}`;
   Message.style.backgroundColor = "green";
  }
  else{
     // increment the computer score value...
    Cmp_score++;
    Cmp_scorepara.innerText = Cmp_score;
   Message.innerText = `you are loser ${computer_choice} beats ${imgid}`;
   Message.style.backgroundColor = "red";
  }
 };

   // play the game..
 const play = (imgid) =>{
   console.log("your clicked the choice..",imgid);
   const computer_choice = computer();
   console.log("choice the computer..",computer_choice);

   //Draw the game..
   if(imgid === computer_choice){
    message();
   }
   else{
    let User_Win = true;
     if(imgid === "rock"){
    User_Win =  computer_choice === "paper" ? false : true ;
     }
     else if(computer_choice === "paper"){
      User_Win=computer_choice === "Scissors" ? false : true ;
     }
     else{
     User_Win = computer_choice === "rock" ? false : true ;
     }
     showWinner(User_Win,imgid,computer_choice);
   }
 };
choice.forEach((img)=>{
  console.log(img);
  img.addEventListener("click",()=>{
   const imgid = img.getAttribute("id");
   play(imgid);
  });
});
