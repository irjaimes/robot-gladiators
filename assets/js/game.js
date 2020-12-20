// GLOBAL VARIABLES

//function to set playerName
var getPlayerName = function() {
    var name = "";

    while (name === null || name === "") {
        name = prompt("What is your robot's name");
    }   
};


var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
      },//coma//
    refillHealth: function() {
        if (this.money >= 7) {
        alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
        }
        else {alert("You don't have enough money!");
        }
    }, //coma
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
      }
};
// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}
var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];

// FIGHT FUNCTION
var fight = function (enemy) { 
    console.log(enemy);

    while (enemy.health > 0 && playerInfo.health > 0) {
        //ask player if they'd like to fight or skip
        var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //console.log(promptFight);

        // if player choses to SKIP confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = confirm("Are you sure you'd like to quit?");

            //if yes(true), leave FIGHT
            if (confirmSkip) {
                alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break; //exits list so we can face next opponet with money penalty
            }
        } /*else { // if no (false), ask question again by running fight() again
             fight();
             }*/

        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable    
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

        // check ENEMY'S health
        if (enemy.health <= 0) {
            alert(enemy.name + " has died!");
            //enemy has no more health, 'break' exits while loop. For loop assigns 50 to new enemy health and while loop starts again
            break;
        } else {
            alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        // check PLAYER'S health
        if (playerInfo.health <= 0) {
            alert(playerInfo.name + " has died!");
            break;  //leave WHILE loop if player health is 0
        } else {
            alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
        /*else { //choose valid option fight or skip no other values (right now takes skip ONLY to skip and anything else to fight)
           alert("You need to choose a valid option. Try again!"); 
       }   */
    }
};

//START GAME function
var startGame = function () {
    // reset player stats
   playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            //let player know what round they are in, since array starts at 0, we need to add +1.
            alert("Welcome to Robot Gladiators! Round " + (i + 1));
            //debugger;
            //variable to pick new enemy based on index in enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            //reset enemy.health since this will be a new enemy
            pickedEnemyObj.health = randomNumber(40, 60);;
            //debugger; // to pause script from running, check each line ran
            fight(pickedEnemyObj); //pass the pickedEnemyObj variable VALUE into the fight() function where it will assume the VALUE of enemy.name parameter
        }// if player is alive and we're not on the last enemy in the array. ensures shop() is called after every fight if loop iterator, i, can increment
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) { //using length attribute & - 1 lets us access last item in array no matter how many items in array
            var storeConfirm = confirm("The fight is over, visit the store before the next round?");
            //if yes(confirm), take them to shop function
            if (storeConfirm) {
                shop();
            }

        }else {
            alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    endGame(); //changed startGame to endGame
}

// END GAME function
var endGame = function () {
    if (playerInfo.health > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
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
var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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



// call start the game when the page loads
startGame();

 //call the fight() function
 //fight();