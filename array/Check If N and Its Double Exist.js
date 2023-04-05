// Check If N and Its Double Exist

// solution-1
var checkIfExist = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[i] === 2*arr[j] && i !== j) {
                return true;
            }
        }
    }
    return false
};

// solution 2
var checkIfExist = function(arr) {
    let result = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i]) {
                result = true;
            }
        }
    }

    return result;
};