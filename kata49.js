//kata49
function reverseWords(str) {
    let strNew = str.split(" ").reverse().join(" ");
return strNew;
    
}

//opcja B
reverseWords=(s)=>{
    const a=s.split(' ')
    return a.map(a.pop,[...a]).join(' ')
  }