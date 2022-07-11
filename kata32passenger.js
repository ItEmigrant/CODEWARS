function enough(cap, on, wait) {
    // your code here
    if (cap >= (on + wait)) {
      return 0;
    }
    else {
      let x = 0; 
      return x = ((on + wait) - cap); 
    }
  }