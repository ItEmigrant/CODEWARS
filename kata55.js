/*function remove(s, n) {
    return s.split('').map(s => s === "!").splice(n)
}

console.log(remove('! !node kata55.js hello !', 2))*/

//ok version
function remove(s, n) {
    let arr = s.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '!' && count < n) {
            arr.splice(i, 1);
            i--;
            count++;
        }
    }
    return arr.join('');
}
console.log(remove('! hello !', 2))