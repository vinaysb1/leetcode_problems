// average-salary-excluding-the-minimum-and-maximum-salary/
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


// average-salary-excluding-the-minimum-and-maximum-salary/
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