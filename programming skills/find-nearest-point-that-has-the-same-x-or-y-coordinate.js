// find-nearest-point-that-has-the-same-x-or-y-coordinate
var nearestValidPoint = function(x, y, points) {
    let currentMin = Infinity
    let index = -1
  
 points.forEach((point,i) => {
     
    if(point[0] === x || point[1] === y){
         manhattanDistance = Math.abs(x-point[0]) +  Math.abs(y-point[1])
        if(currentMin > manhattanDistance)
        {
            currentMin = manhattanDistance
            index = i
        } 
    }}); 
    return index
}