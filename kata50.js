//kata50
function grow(x) {

    let y = x.reduce((currentMult, currentNum)=>{
        return currentMult * currentNum
    },1)
    return y;    
       }


       //kata50.1
       function grow(x) {
       if(x.length >=0) {
        let y = 1
        for (let i=0; i<x.length; i++) {

            y *=x[i]
           return y;
        }

    }
}