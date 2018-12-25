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

var namePrompt = prompt("What is your name?");
var gameStatus = "y";
var gameLives;

var suppStages = [{
        stageNo: 1,
        stageName: "Laning",
        actionTaken: "1. Farm creeps \n2. Harrass enemies",
        endResult: [
            ["Stop stealing CS", 1],
            ["Nice support", 0]
        ]
    },
    {
        stageNo: 2,
        stageName: "Teamfight",
        actionTaken: "1.Kill support \n2. control fight",
        endResult: [
            ["Not enough damage", 1],
            ["Nice control", 0]
        ]
    },

    {
        stageNo: 3,
        stageName: "Push the high ground",
        actionTaken: "1.Kill barracks \n2. distract heroes",
        endResult: [
            ["Not enough damage", 1],
            ["Nice distracting", 0]
        ]

    }
];

var carryStages = [{
        stageNo: 1,
        stageName: "Laning",
        actionTaken: "1.Farm creeps \n2. Harrass enemies",
        endResult: [
            ["CS pogU", 0],
            ["CS LUL", 1]
        ]
    },
    {
        stageNo: 2,
        stageName: "Teamfight",
        actionTaken: "1.Kill support \n2. control fight",
        endResult: [
            ["won teamfight", 0],
            ["lost teamfight", 1]
        ]
    },
    {
        stageNo: 3,
        stageName: "Push the high ground",
        actionTaken: "1. Kill barracks \n2. distract heroes",
        endResult: [
            ["Nice! Super creeps", 0],
            ["Rax is preserved. Retreat", 1]
        ]
    }
]


while (gameStatus == "y") {
    var mmrPrompt = prompt("What is your MMR?");
   
   //while to prevent invalid no
    if (mmrPrompt < 3000) {
        gameLives = 1;
    } else if (mmrPrompt < 6000) {
        gameLives = 2;
    } else if (mmrPrompt < 10000) {
        gameLives = 3;
    } 

    alert("Game is beginning.");
    heroPick = prompt("Pick your role \n1. Support \n2. Carry");
    var currentGameStage;
    if (heroPick == 1) {
        currentGameStage = suppStages;
    } else if (heroPick == 2) {
        currentGameStage = carryStages;
    }

    for (stageNo = 0; stageNo < currentGameStage.length; stageNo++) {
        actionTaken = prompt(currentGameStage[stageNo].actionTaken);
        alert(currentGameStage[stageNo].endResult[actionTaken - 1][0]);
        gameLives -= currentGameStage[stageNo].endResult[actionTaken - 1][1];
        alert("You have "+gameLives+" live(s) left");

        if (gameLives == 0){
            break;
        }

    }

    alert("Game over. You have " + gameLives + (" live(s) left."));
    gameStatus = prompt("Do you want to restart?(y/n)");
}
