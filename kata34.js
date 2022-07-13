function remove (string) {
    const ss = string.split('!').join('')
      if (ss !== '!') {
        return ss + '!'
      }
  }

  //opcja b
  function remove(s){
    var str=""
    for (var i=0; i<s.length; ++i)
      if (s[i]!='!')
        str+=s[i];
    return str+'!';
  }