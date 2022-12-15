//https://leetcode.com/problems/richest-customer-wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(i=0;i<accounts.length;i++){
        let tempSum = accounts[i].reduce((a,b) => a+b);
        if(tempSum>maxWealth){
            maxWealth = tempSum
        }
    }
    return maxWealth;
    
};
console.log(maximumWealth([[1,2,3],[3,2,1]])); 
// output : 6