function Pattern() {
    let pattern = '';

    // Generate the decreasing sequence (4, 3, 2, 1)
    for (let i = 4; i >= 1; i--) {
        pattern += i;
    }

    // Add the middle number (5)
    pattern += '-5-';

    // Generate the increasing sequence (9, 8, 7, 6)
    for (let i = 9; i >= 6; i--) {
        pattern += i;
    }

    return pattern;
}


console.log(Pattern());

