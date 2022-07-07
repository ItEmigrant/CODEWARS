function isPalindrome(x) {
    let reverse= x.split('').reverse().join('')
    if (reverse.toLowerCase()==x.toLowerCase()){
    return true;
    }
    else{
        return false;
    }
    }
      