/**
* Summary.
* Description.
* @link URL
* @file
* @author Andrew Dresel-Kurtz.
* @since 11.22.21
*/

function FizzBuzz() {
  var str = "";
  for(i=0; i<=200; i++){
    str = str + i + ". ";
    if(i%3==0) {//if it's =3
    str = str + "Fizz ";
      if(i%5==0) {//but also if it =5
        str = str + "Buzz ";
      }//end if
      if(i%7==0) {//but also if it = 7
        str = str + "Boom ";
      }//end if
    str = str + "<br>";//new line
  }//end if Fizz
  else if(i%5==0) {//if it = 5
  str = str + "Buzz";
  if(i%7==0) {//but also if it = 7
    str = str + "Boom ";
  }//end if
  str = str + "<br>";//new line
    }//end if Buzz
  else if(i%7==0) {//if it = 7
    str = str + "Boom";
    str = str + "<br>";//end line
  }//end if boom

  else {
    str = str + " <br>";//new line
  }
  }//end for
  return str;
}

var output = $("#numOutput");
$("p#numOutput").html(FizzBuzz());
// output = FizzBuzz().val;
console.log(FizzBuzz());
