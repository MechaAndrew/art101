/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 11.30.21
*/


//get the endpoint for the comic
//generates a random starting point for the website
var number = Math.floor(Math.random() * 2547) + 1;

var myURL = "https://xkcd.com/" + number + "/info.0.json";
//myURL = "https://xkcd.com/1/info.0.json"
console.log(myURL);
$("#activate").click(callAjax);

function callAjax() {
  console.log("click");

  $.ajax({
    url: myURL,

    data: {},

    type: "GET",

    dataType: "json",

  })

  .done(function(data) {
    console.log("Successs", data.quote);
    $("#output").html(data.quote);
    //JSON.stringify(data)
  })

  .fail(function(request,error) {
    console.log(request, error);
    $("#output").html("Error")
  })

}
