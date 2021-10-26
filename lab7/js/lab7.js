/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 10.21.21
*/
var userName = window.prompt("Please Enter a user name");

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

function sortName() {
  //display window prompt to gather name
  document.writeln("Entered Name: ", userName, "<br>");

//create a variable that splits the individual characters, sorts them in alphabetical order, then rejoin them as a string
var nameSorted = userName.toLowerCase().split("").sort().join("");

  //return nameSorted;
  return nameSorted;
}

function anagram() {
  var copyName = userName;


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

//sortName();
//output
document.writeln("Name Sorted: ", sortName(), "<br>");
document.writeln("Anagram: ", anagram(), "<br>");

//document.writeln("Name Sorted: ");
