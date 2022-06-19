function doubleChar(str) {
    var out = '';
    for (var i = 0; i < str.length; i++){
      out = out + (str[i] + str[i]);
    };
    return out;
  };
  
  