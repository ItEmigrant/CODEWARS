//opcja a
function addLength(str) {
    let arrayStr = str.split(" ")
    
    for (let i = 0; i<arrayStr.length; i++) {
    
    arrayStr[i] += " " + arrayStr[i].length
    
    }
    return arrayStr
    }

    //opcja b
    function addLength(str){
        return str.split(" ").map(s => `${s} ${s.length}`)
        }