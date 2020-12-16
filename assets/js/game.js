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
    if (playerHealth > 0){
        //let player know what round thery are in, remember that arrays start at 0 so it needs to have 1 added to it
        alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
        //pick new enemy to fight based on the index of the enemyName array
        var pickedEnemyName = enemyNames[i];
        
        //reset enemyHealth before startgin new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check what's going on at that moment in the code
        //debugger (<--commented out)

        //pass the pickedName variable's value into the fight function, where it'll assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }else { //this else conditional did NOT display. ask about it
        alert("You have lost your robot in battle! Game Over!"); 
        break;
    }
}
