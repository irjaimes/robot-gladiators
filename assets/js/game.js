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
    //alert("Welcome to Robot Gladiators!");
     
     while(enemyHealth > 0 && playerHealth > 0) { 
         //ask player if they'd like to fight or skip
         var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
         //console.log(promptFight);
 
         // if player choses to SKIP confirm and stop loop
         if (promptFight === "skip" || promptFight === "SKIP"){
             //confirm player wants to skip
             var confirmSkip = confirm("Are you sure you'd like to quit?");
             
             //if yes(true), leave FIGHT
             if (confirmSkip) {
                 alert(playerName + " has decided to skip this fight. Goodbye!");
             // subtract money from playerMoney for skipping
                 playerMoney = Math.max(0, playerMoney - 10);
                 console.log("playerMoney", playerMoney);
                 break; //exits list so we can face next opponet with money penalty
             }    
         } /*else { // if no (false), ask question again by running fight() again
             fight();
             }*/
     
         // remove enemy's health by subtracting the amount set in the playerAttack variable    
         var damage = randomNumber(playerAttack - 3, playerAttack);
         enemyHealth = Math.max(0, enemyHealth - damage);
 
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
         var damage = randomNumber(enemyAttack - 3, enemyAttack);
         playerHealth = Math.max(0, playerHealth - damage);
 
         console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
         
         // check PLAYER'S health
         if (playerHealth <= 0) {
             alert(playerName + " has died!");
             break;  //leave WHILE loop if player health is 0
         } else {
             alert(playerName + " still has " + playerHealth + " health left.");
         }
          /*else { //choose valid option fight or skip no other values (right now takes skip ONLY to skip and anything else to fight)
             alert("You need to choose a valid option. Try again!"); 
         }   */       
     }
 };

 //START GAME function
 var startGame = function() {
 // reset player stats
 playerHealth = 100;
 playerAttack = 10;
 playerMoney = 10;
       
 for(var i = 0; i < enemyNames.length; i++) {
         if (playerHealth > 0) {
             //let player know what round they are in, since array starts at 0, we need to add +1.
             alert("Welcome to Robot Gladiators! Round " + (i + 1));
             //variable to pick new enemy based on index in enemyNames array
             var pickedEnemyName = enemyNames[i];
             //reset enemyHealth since this will be a new enemy
             enemyHealth = 50;
             //debugger; // to pause script from running, check each line ran
             fight(pickedEnemyName); //pass the pickedEnemyName variable VALUE into the fight() function where it will assume the VALUE of enemyName parameter
         }// if player is alive and we're not on the last enemy in the array. ensures shop() is called after every fight if loop iterator, i, can increment
             if (playerHealth > 0 && i < enemyNames.length - 1) { //using length attribute & - 1 lets us access last item in array no matter how many items in array
                 var storeConfirm = confirm("The fight is over, visit the store before the next round?");
                 //if yes(confirm), take them to shop function
                 if (storeConfirm) {
                     shop();
                 }
                 
             }
         else { 
             alert("You have lost your robot in battle! Game Over!"); 
             break;
         }   
     }
     //play again
     endGame(); //changed startGame to endGame
 }
 
 // END GAME function
 var endGame = function() {
     if (playerHealth > 0){
         alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
     } else{
         alert("You've lost your robot in battle.");
     }
     // ask player if they'd like to play again
     var playAgainConfirm = confirm("Would you like to play again?");
 
     if (playAgainConfirm) { //playerAgainConfirm = true = yes
     // restart the game
     startGame();
     } 
     else {
     alert("Thank you for playing Robot Gladiators! Come back soon!");
     }
 };
 
//SHOP function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": 
        case "refill":
            if (playerMoney >= 7) {
                alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
              alert("Upgrading player's attack by 6 for 7 dollars.");
          
             // increase attack and decrease money
              playerAttack = playerAttack + 6;
              playerMoney = playerMoney - 7;
            }
            else {
              alert("You don't have enough money!");
            }
            break;
        
        case "LEAVE":
        case "leave":
        alert("Leaving the store.");

        // do nothing, so function will end
        break;
        default:
        alert("You did not pick a valid option. Try again.");
    
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }      
};  
 
// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}
 
 
 // call start the game when the page loads
 startGame();
 
 //call the fight() function
 //fight();