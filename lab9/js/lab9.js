/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 11.1.21
*/

var outputEl = document.getElementById("output");
//create a variable that gets the inforamtion with the ID of "output"
var new1El = document.createElement("p");
new1El.innerHTML = "<p>Something New</p>";
new1El.style.color = "pink";
//create a variable and modify its html to be a paragraph

var new2El = document.createElement("p");
new2El.innerHTML = "<p>Something New the sequelling</p>";
//create a variable and modify its html to be a paragraph

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//we add new1El and new2El onto outputEl
outputEl.style.boarder = "double 2px black";
//changed the style
