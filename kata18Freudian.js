//opcja A
const toFreud = (string) => {
    let array = string.split(' ');
    if(string.length === 0) {
      return '';
    }
    for(let i = 0; i < array.length; i++) {
      array[i] = 'sex';
    }
    return array.join(' ');
  }

  //opcja B
  function toFreud(string) {
    var sexWord = "";
    let result = string.split(" "); // Split words in sentence
    if (result == "") { // check for no words
        return ""; // if no words, return that
    } else {
        for (var i = 0; i < string.split(" ").length; i++) { // loop for word amount length
            sexWord += "sex "; // push word 
        }

    }
    return sexWord.substring(0, sexWord.length - 1); // remove the empty space at end
}

//opcja C
function toFreud(string) {
    if (string === '' || string === null){
      return ''
    }else{
    let newArr = string.split(' ')
    let newArr1 = []
    for (let i = 0; i <newArr.length; i++){
      newArr[i] = 'sex'
      newArr1.push(newArr[i])
    }
    let str1 = newArr1.join(' ')
    
  return str1;
      }
  }

  //opcjaD
  function toFreud(string) {
    let str_array=string.split(' ');
    if (string==[]){return ""}
    else{
    for (i in str_array){
      string=string.replace(str_array[i],"sex");
    }
    return string;}
  }
  
  