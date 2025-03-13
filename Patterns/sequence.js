function Pattern(userInput) {
    
    const n = parseInt(userInput);
    const mid = Math.ceil(n / 2);

    let pattern = '';

    
    for (let i = mid - 1; i >= 1; i--) {
        pattern += i + ' ';
    }

    pattern += `-${mid}- `;

    
    for (let i = mid + 1; i <= n; i++) {
        pattern += i + ' ';
    }

    return pattern.trim(); 
}


//const userInput = 15; 
console.log(Pattern(userInput));