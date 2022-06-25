
function stray(numbers) {
    //take first element
    let strayChar = numbers[0];

    // see if it is different from the next 2
    if (strayChar !== numbers[1] && strayChar !== numbers[2]) return strayChar;

    // if not find the first value that is different
    for(let i = 1; i < numbers.length; i++){
      if(strayChar !== numbers[i])return numbers[i];
    }
 }

 //option b
 function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){
         return numbers[i]}
    }
  }

  //option c
  function stray(numbers) {
    var sort = numbers.sort();
    if (sort[0] === sort[1]) {
      return sort[sort.length-1]
    }  else {
      return sort[0]
    }
      
    }