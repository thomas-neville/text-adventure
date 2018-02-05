console.log("hello")
/* 
Setup
var for treasure location
var for current location
grid
var for coords x,y
vars for directions
var for treasure

Gameplay
Start with a promp, telling the user about adventure
while !treasureFound
ask what direction
tell user if treasure is in their new location
check that theyve entered a valid direction
only prompt valid directions
make sure their move is within the grid
do math, figure users current location

How does game end
treasure found = true
output to user alert message they found it
give option to retry
*/

//Define the size of the gameplay area
var maxX = 2;
var maxY = 2;
// User starts at x0, y0 (bottom left of grid)
var userX = 0;
var userY = 0;

// Hide the treasure, with x and y values
var treasureX = 2;
var treasureY = 1;

// Flag that controls loop
var treasureFound = false;

// Get user's name
var name = prompt("Welcome adventurer! What's your name?");


while(!treasureFound) {
  var direction = prompt("Which direction would you like to go in? (north, south, east, or west)?")
  
  console.log(direction);
  
  // temp vars for checking validity of new user location after move
  var newX
  var newY
  
  // see what new user location should be
  
  // check if new user location is valid
  
  // check if new user location is treasure
  
  if(direction == "north") {
    newX = userX
    newY = userY + 1
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
      
    }else {
      console.log("There is a forbidden mountain range in that direction, you cannot pass...")
    }
    
  }else if(direction == "east"){
    newX = userX + 1
    newY = userY
     // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("There is a forbidden mountain range in that direction, you cannot pass...")
    }
    
  }else if(direction == "south"){
    newX = userX
    newY = userY - 1
     // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("There is a forbidden mountain range in that direction, you cannot pass...")
    }
    
  }else if(direction == "west"){
    newX = userX - 1
    newY = userY
     // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("There is a forbidden mountain range in that direction, you cannot pass...")
    }
    
  }else {
    console.log("Please enter a real direction")
  }
  
  // See if user location matches treasure
  if(userX == treasureX && userY == treasureY){
    treasureFound = true
  }
}