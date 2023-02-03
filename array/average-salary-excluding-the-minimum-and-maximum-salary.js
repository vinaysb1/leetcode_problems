// average-salary-excluding-the-minimum-and-maximum-salary approach-1
var average = function(salary) {
    let arr = salary.sort((a, b) => a-b)
    let sum = 0;
    for(let i = 1; i < arr.length - 1; i++){
        sum += salary[i]
    }
    return sum / (salary.length - 2)
    }

    // average-salary-excluding-the-minimum-and-maximum-salary approach-2
    var average = function(salary) {
        var length=salary.length
        var sum=0;
        minValue = Math.min(...salary);
        maxValue = Math.max(...salary);
        for(i=0;i<length;i++){
            if(salary[i]!=minValue ){
                if(salary[i]!=maxValue){
            sum=sum+salary[i];
                }
            }
        }
        return sum/(length-2)
        
 };