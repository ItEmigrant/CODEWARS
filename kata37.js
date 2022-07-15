//kata37
function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }

  //opcja B
  function position(letter){
    let abc = '0abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < abc.length; i++) {
      if (abc[i] == letter) {
        return 'Position of alphabet: ' + i;
      }
    }
  }