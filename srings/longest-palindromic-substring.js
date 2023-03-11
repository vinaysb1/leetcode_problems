

var longestPalindrome = function(s) {
    // Take care of edge case
    if(s.length === 1) return s

    // Declare palindrome variable as empty string
    let palindrome = ""
    // Declare max palindrome as first letter(in case of 2 letter words)
    let maxPalindrome = s[0]

    // 1st loop, loop through the word
    for(let i = 0; i < s.length; i++){
        // 2nd loop, loop through the rest of the word
        for(let j = i + 1; j < s.length; j++){
            let x = i
            let y = j
            // 3rd loop, loop through palindrome to check if it is a valid palindrome
            while(s[x] === s[y]){
                // Use x and y as left and right respectively

                // Cases for end of palindrome 
                // e.g "aba" || "abba"
                if(x === j || x === j - 1){
                    palindrome = s.slice(i, j + 1)
                    if(palindrome.length > maxPalindrome.length){
                        maxPalindrome = palindrome
                    }
                    break
                }

                // Increase X and Decrease Y
                x++
                y--
            }
        }
    }

    return maxPalindrome
};