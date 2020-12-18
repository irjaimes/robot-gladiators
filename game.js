// GLOBAL VARIABLES
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// FIGHT FUNCTION
var fight = function(enemyName) { // function(enemyName) passes arbitrary enemyName as argument(placeholder) ??
    alert("Welcome to Robot Gladiators!");

    //repeate and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) { 
        //ask player if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //console.log(promptFight);

        // if player choses to SKIP confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP"){
            //confirm player wants to skip
            var confirmSkip = confirm("Are you sure you'd like to quit?");
            
            //if yes(true), leave FIGHT
            if (confirmSkip) {
                alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break; //exits list so we can face next opponet with money penalty
            }    
        } /*else { // if no (false), ask question again by running fight() again
            fight();
            }*/
    
        // remove enemy's health by subtracting the amount set in the playerAttack variable    
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log ( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        // check ENEMY'S health
        if (enemyHealth <= 0) {
            alert(enemyName + " has died!");
            //enemy has no more health, 'break' exits while loop. For loop assigns 50 to new enemy health and while loop starts again
            break;
        } else {
            alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        // check PLAYER'S health
        if (playerHealth <= 0) {
            alert(playerName + " has died!");
        } else {
            alert(playerName + " still has " + playerHealth + " health left.");
        }
         /*else { //choose valid option fight or skip no other values (right now takes skip ONLY to skip and anything else to fight)
            alert("You need to choose a valid option. Try again!"); 
        }   */       
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    debugger;
    fight(pickedEnemyName);

    
}




//call the fight() function
//fight();