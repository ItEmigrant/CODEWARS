//kata51
function removeExclamationMarks(s) {
  
    let newS = s.split("!").join("")
    return newS;
  };

  //option 2
  function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

  //option 3
  function removeExclamationMarks(s) {
    var arr =s.split("");
    arr = arr.filter(function(e){
          return e !== "!";
      })
      return arr.join("");
  }

  