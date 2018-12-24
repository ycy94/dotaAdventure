// Rules
// Any path the user goes down must ask them at least three questions.
// There must be a minimum of seven total destinations the user could arrive at based on their responses.
// For at least one of the questions asked, there must be more than two possible user responses.
// Your code must contain at least one loop.
// Your code must make use of both string and number user inputs.
// The game should work without the dev tools console open- no console.log!
// You can only use prompt, alert, and confirm
// Hint: For each small milestone you reach in your program, make a git commit

// Hint: You may need parseInt() and toString()

// Hint: if you finish your code, clean it up by putting certain parts inside functions. If needed they can be used again later as well.

// Hint: Need a random number?

// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

var namePrompt= prompt("What is your name?");
var mmrPrompt= prompt("What is your MMR?");
var gameStatus= "y";
var gameLives;




while (gameStatus == "y"){
    
    if (mmrPrompt<3000){
        gameLives=1;
    }else if (mmrPrompt<6000){
        gameLives=2;
    }else if (mmrPrompt<10000){
        gameLives=3;
    }else {
        prompt("reenter your MMR");
    }

    alert("Game is beginning.");
    heroPick=prompt("Pick your role \n1. Support \n2. Carry");

    //stage 1
    alert("This is the laning stage. Decide what you should do.");
    var actionTaken = prompt("\n1. Farm creeps \n2. harrass enemy heroes");
    if (heroPick == "1" && actionTaken == "1"){
        alert("God damn baboons ruining my game");
        gameLives= gameLives -1;
        alert("You have lost one life");
    }else if (heroPick =="1" && actionTaken =="2"){
        alert("Good job baboons");
    }else if (heroPick =="2" && actionTaken =="1"){
        alert("CS pogU");
    }else if (heroPick=="2"&& actionTaken =="2"){
        alert("CS LUL");
        gameLives= gameLives -1;
        alert("you have lost one life");
    }
    console.log(gameLives);
    
    //stage 2
    alert("A team fight is about to begin. Decide what you should do.");
    var actionTakenMid = prompt("\n1. Focus on killing heroes \n2. Save carries and control fight");
    if (heroPick=="1" && actionTakenMid=="1"){
        alert("You lost the teamfight.Try protecting your team next time");
        gameLives=gameLives-1;
        alert("You have lost one life");      
    }else if (heroPick =="1" && actionTakenMid=="2"){
        alert("Masterful supporting job, well done. You won the fight");
    }else if (heroPick=="2" && actionTakenMid=="1"){
        alert("You won the teamfight. Rampage");
    }else if (heroPick=="2" && actionTakenMid=="2"){
        alert("Not enough damage. Your team just got wiped");
        gameLives= gameLives-1;
        alert("you have lost one life.")
    }
    console.log(gameLives);

    //stage 3
    alert("The game is approaching the end.Get ready.");
    var actionTakenEnd = prompt("\n1. Hit barracks and throne \n2. Distract enemy heroes");
    if (heroPick=="1" && actionTakenEnd=="1"){
        alert("You lost the battle and your team got wiped.");
        gameLives=gameLives-1;
        alert("You have lost one life");      
    }else if (heroPick =="1" && actionTakenEnd=="2"){
        alert("Great job! You won the fight and took the barracks");
    }else if (heroPick=="2" && actionTakenEnd=="1"){
        alert("You won the teamfight. Nice work");
    }else if (heroPick=="2" && actionTakenEnd=="2"){
        alert("Not enough damage. The barracks still stand");
        gameLives= gameLives-1;
        alert("you have lost one life.")
    }
    console.log(gameLives);

    alert("Game over. You have "+ gameLives+(" left."));
    gameStatus= prompt("Do you want to restart?(y/n)");
}
