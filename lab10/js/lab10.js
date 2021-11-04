/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 11.1.21
*/



//function to grab the inputed name. holdNmae has bee ncreated earlier to use it outside of the function
function grabName() {
  var userName = window.prompt("Please Enter a user name");
  holdName = userName;
  return userName;
}


function sortName(name) {
//use name as an input and the following functions to sort it
//create a variable that splits the individual characters, sorts them in alphabetical order, then rejoin them as a string
var nameSorted =name.toLowerCase().split("").sort().join("");

  //return nameSorted;
  return nameSorted;
}//end Sort Name by alphabetical

function shuffle(userName) {
//havea hold variable that is split by characters
  var hold = userName.split('');
//randomly sort each character
  hold.sort(function() {
return 0.5 - Math.random();
});
//rejoin the ramdomly moved chracters
  userName = hold.join('');

return userName;

}//end shuffle

function anagram() {
  var copyName = holdName;


  //we make everything lower case

  copyName = copyName.toLowerCase().trim();//.split(" ");

//we shuffle our given word but also split each individual word
copyName = shuffle(copyName).split(" ");


//Give the upper letters
//perform a for loop
  for(var i = 0; i < copyName.length; i++) {

//the loop makes it so each first letter in each segmented word is capitalized then the rest of the word is joined back
    copyName[i] = copyName[i][0].toUpperCase() + copyName[i].substr(1);

  }


  //rejoin each segmented word back into a complete sentence
copyName = copyName.join(" ");

return copyName;
}


function putName() {

  var headingEl = document.getElementById("output");//assign headingEl the output line

  headingEl.innerHTML = "Hello, " +holdName + ". Or should I say, " + sortName(holdName) + ". Or should I say once again " + anagram() ;
  //first put the true name that we got from the button press then sort the given name with the function and merge them onto the line

}

var holdName; //hold the true name
var buttonEl = document.getElementById("the-button");//assign buttonEl the data of the-button

buttonEl.addEventListener("click", grabName);//once the button is pressed the user will be given a prompt to enter a name
buttonEl.addEventListener("click", putName);// once the button is pressed the data from the previous line will be placed on screen
