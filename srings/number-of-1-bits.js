// number-of-1-bits
var hammingWeight = function(n) {
    let x = n.toString(2).split('')
  let y=0;
for(let i=0;i<=x.length;i++){
    if(x[i]==1){
        y++
    }
}
return(y) 
};

