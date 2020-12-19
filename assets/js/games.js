// GLOBAL VARIABLES
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

// FIGHT FUNCTION EXPRESSION
var fight = function (enemyName) { 
    //Repeate and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {

    //ask player if they'd like to fight or leave
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");

        //if player chooses to skip battle, stop loop
        if (promptFight === "skip" || promptFight === "SKIP") { 

        //confirm player wants to skip
            var confirmSkip = confirm ("Are you sure you'd like to quit?");

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
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break; 
        } 
        else {
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
        } 
        else {
            alert(playerName + " still has " + playerHealth + " health left.");
            console.log(playerName + " still has " + playerHealth + " health left.");
        }
    } 
}; 


// START NEW GAME FUNCTION
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerHealth = 10;
    playerMoney = 10;
    
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //let player know what round thery are in, remember that arrays start at 0 so it needs to have 1 added to it
            alert("Welcome to Robot Gladiators! Round " + (i + 1));

            //pick new enemy to fight based on the index of the enemyName array
            var pickedEnemyName = enemyNames[i];
            
            //reset enemyHealth before starting new fight
            enemyHealth = 50; 

            //debugger //(<--COMMENT OUT***************************)
            
            //pass the pickedName variable's value into the fight function, where it'll assume the value of the enemyName parameter
            fight(pickedEnemyName);  
        } 
        else { 
            alert("You have lost your robot in battle! Game Over!"); 
            break;
        }
    }
    
    //After the loop ends, player is either out of health or enemies need to fight, so run endGame function
    endGame();
};

//  END GAME FUNCTION 
var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerMoney + " money points.");
    } else {
        alert("You've lost your robot in battle.");
    }
    //ask player if they want to play again
    var playAgainConfirm = confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        alert("Thank you for playing Robot Gladiators! Come back soon!");
        
    } 
};

fight();
endGame();
    











