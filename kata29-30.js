//kata29
function greet(name) {
    //your code here
    return "Hello, " + name + " how are you doing today?";
}

//kata 30 
function sumStr(a, b) {
    let sumStr = 0;
    if (a == '' && b == '') {
        return '0';
    }
    else {
        sumStr = Number(a) + Number(b);
    }

    return sumStr.toString();

}