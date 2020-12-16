var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames =  ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) { //fight function expression
    //Repeate and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        //ask player if they'd like to fight or run
        var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");

        //if player chooses to skip battle stop loop
        if (promptFight === "skip" || promptFight === "SKIP") { 
        //confirm player wants to skip
        var confirmSkip = confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                alert(playerName + " has decided to skipt this fight. Goodbye!");
            //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + " attacked " + enemyName +  ". " + enemyName + " now has " + enemyHealth + " health remaining."); 
        // check enemy's health
        if (enemyHealth <=0) {
            alert(enemyName + " has died!");
            //award player money for winning
            playerMoney= playerMoney + 20;
            //leave while() loop since enemy is dead
            break; 
        } else {
            alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + " attacked " + playerName +  ". " + playerName + " now has " + playerHealth + " health remaining."); 
        // check player's health
        if (playerHealth <= 0) {
            alert(playerName + " has died!");
            //leave while() loop if player is dead
            break; 
        } else {
            alert(playerName + " still has " + playerHealth + " health left.");
            console.log(playerName + " still has " + playerHealth + " health left.");
        }
            
    
     
    } //while loop end
    
};//fight() function end
    

for (var i = 0; i< enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    //debugger;
    //fight(enemyNames [i]); //each enemyName is passed as argument
}

//if (enemyHealth > 0) {} //if the enemy robot has health points, CONTINUE to fight