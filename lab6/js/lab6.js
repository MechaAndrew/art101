/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 10.21.21
*/

//Declare and Define Variables
var myTransport = ["Bus", "Car", "Uber", "Walking"];


var myMainRide = {
make: "Toyota Rav4",
model: '2019 Toyota RAV4 Excel (AXAH52)',
color: 'Red',
year: 2019,
ownIt: true,

};




//output
document.writeln("What I use to get around: " + myTransport +"<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
