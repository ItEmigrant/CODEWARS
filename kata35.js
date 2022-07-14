function makeNegative(num) {
    if (num < 0) {
      return num;}
      else if (num == 0) {
        return 0;}
        else {
          let x;
          return x = 0 - num; 
        }
        
    // Code?
  }

  //opcion B
  function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
  }

  //opcja C
  function makeNegative(num) {
    return -Math.abs(num);
  }