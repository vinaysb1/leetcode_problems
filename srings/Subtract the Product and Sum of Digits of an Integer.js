// Subtract the Product and Sum of Digits of an Integer
var subtractProductAndSum = function(n) {
    let str = n.toString().split("");
    var mult = 1;
    var add = 0;
    for(let i = 0; i < str.length; i++){
        mult = mult * parseInt(str[i]);
        add = add+parseInt(str[i])
    }
    let total = mult - add ;
    return total;
};