/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 10.27.21
*/

//array
var arr = [1,5,68,26,-5];
//fucntion
function realQuickMaths(x) {var results = x + x; return results;}
//test fucntion in console
console.log("8 + 8 from realQuickMaths is: ",realQuickMaths(8));
//print array in console
console.log("My array:", arr);

//store and print array from function
var results = arr.map(realQuickMaths);
console.log("Array from realQuickMaths", results);

//anon function
var results = arr.map(function(x){var results = x * x+1; return results;});
console.log("Array from realQuickMaths pt2", results);



//sortName();
//output
