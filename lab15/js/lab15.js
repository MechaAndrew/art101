/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 11.30.21
*/




var myURL = "https://api.kanye.rest";
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
