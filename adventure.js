// Test for console log
console.log("hello")

/* 
Setup
var for light switch location
var for current location
grid
var for coords x,y
vars for directions
var for light switch

Gameplay
Start with a promp, telling the user about adventure
while !switchFound
ask what direction
tell user if light switch is in their new location
check that theyve entered a valid direction
only prompt valid directions
make sure their move is within the grid
do math, figure users current location

How does game end
switchFound = true
output to user alert message they found it
give option to retry
*/

//Define the size of the gameplay area
var maxX = 2;
var maxY = 2;

// User starts at x0, y0 (bottom left of grid)
var userX = 0;
var userY = 0;

// Hide the light switch, with x and y values
var switchX = 2;
var switchY = 2;

// Flag that controls loop
var switchFound = false;

// Get user's name
var name = prompt("Welcome! You have just volunteered to help us find the light switch in this dark room. Enter your name:");

// Log the user's name to the console
console.log(name)

// Confirm name and begin adventure
alert("Thanks," + name + ". How about we look for the light switch now?")

// While loop for light switch not found
while(!switchFound) {
  
  // Start of location testing
  // show user location on grid
  // move dot to current room location
  // append child to move ID blink div to room based on newX, newY
  
  if(userX == 0 && userY == 2){
    document.getElementById("r1").appendChild(document.getElementById("dot"))
  }
  if(userX == 1 && userY == 2){
    document.getElementById("r2").appendChild(document.getElementById("dot"))
  }
  
  // Room 3 is the final room, moving this line of code to the end
  
  if(userX == 0 && userY == 1){
    document.getElementById("r4").appendChild(document.getElementById("dot"))
  }
  if(userX == 1 && userY == 1){
    document.getElementById("r5").appendChild(document.getElementById("dot"))
  }
  if(userX == 2 && userY == 1){
    document.getElementById("r6").appendChild(document.getElementById("dot"))
  }
  if(userX == 0 && userY == 0){
    document.getElementById("r7").appendChild(document.getElementById("dot"))
  }  
  if(userX == 1 && userY == 0){
    document.getElementById("r8").appendChild(document.getElementById("dot"))
  }  
  if(userX == 2 && userY == 0){
    document.getElementById("r9").appendChild(document.getElementById("dot"))
  }
  // End of location testing
  
  var direction = prompt("Which direction would you like to go in? (up, down, left, or right)?")
  
  console.log(direction);
  
  // temp vars for checking validity of new user location after move
  var newX
  var newY
  
  // see what new user location should be  
  // check if new user location is valid  
  // check if new user location is light switch
  
  if(direction == "up") {
    newX = userX
    newY = userY + 1
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
      
    }else {
      console.log("Oh, that's a wall.")
    }
    
  }else if(direction == "right"){
    newX = userX + 1
    newY = userY
     // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("You almost knocked over the lamp. Keep looking...")
    }
    
  }else if(direction == "down"){
    newX = userX
    newY = userY - 1
     // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("Don't leave! The light isn't on yet...")
    }
    
  }else if(direction == "left"){
    newX = userX - 1
    newY = userY
     // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("Another wall... Turn around and keep looking...")
    }
    
  }else {
    console.log("Please enter a real direction")
  }
  
  // See if user location matches light switch
  if(userX == switchX && userY == switchY){
    console.log("You found the light switch! The lights are back on!")
    document.getElementById("r3").appendChild(document.getElementById("dot"))
    switchFound = true
  }
}