/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 11.1.21
*/

var outputEl;
outputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML = "<p>Something New</p>";

var new2El = document.createElement("p");
new2El.innerHTML = "<p>Something New the sequelling</p>";

outputEl.appendChild(new1El);
//outputEl.appendChild(new2El);
