// largest-perimeter-triangle
function largestPerimeter(numbers) {
    numbers.sort((a, b) => b - a);

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < numbers[i + 1] + numbers[i + 2]) {
            return numbers[i] + numbers[i + 1] + numbers[i + 2];
        }
        
    }

    return 0;
}