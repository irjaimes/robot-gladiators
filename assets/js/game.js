var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames =  ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) { //fight function expression
    //Alert players that they are starting the round
    alert("Welcome to Robot Gladiators");
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + " attacked " + enemyName +  ". " + enemyName + " now has " + enemyHealth + " health remaining."); 
        // check enemy's health
        if (enemyHealth <=0) {
            alert(enemyName + " has died!");
         } 
        else {
            alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyHealth;
        // check player's health
        if (playerHealth <=0) {
            alert(playerName + " has died!");
        }
        else {
            alert(playerName + " still has " + playerHealth + " health left.")
        }
        //if player choses to skip battle fight
    }
    else if (promptFight === "skip" || promptFight === "SKIP") { 
        //confirm player wants to skip
        var confirmSkip = confirm("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if (confirmSkip) {
            alert(playerName + " has decided to skipt this fight. Goodbye!");
        //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question by running fight( again)
        else {
            fight();
        }  
    }
}; //function end

for (var i = 0; i< enemyNames.length; i++) {
    fight(enemyNames [i]); //each enemyName is passed as argument
}

