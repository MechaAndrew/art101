/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 11.15.21
*/


function sortingHat(str) {


var mod = str % 4;//divide the length of str by 4

if (mod == 0) {
  return "Gryffindor";
  }//end if Gryffindor
else if (mod == 1) {
  return "Ravenclaw";
  }//end if RavenClaw
else if (mod == 2) {
  return "Slytherin";
  }//end fi Slytherin
else if (mod == 3) {
  return "Hufflepuff";
  }//end if Hufflepuff

}//end function


var theButton = $("#button");

theButton.click(function(){
  var name = $("#input").val();//assign name with the value of input. .val() gives it a value so we can use .length
  var house = sortingHat(name.length); //we assign house with the value of the function. but we are using out input's length
  var newText = "<p>The Sorting Hat has sorted you into " + house+ "</p>";//output
  $("p#output").html(newText);//chaneg the html of the id output that is only a paragraph with the newText
})
