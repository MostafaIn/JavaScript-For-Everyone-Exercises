const myText = "The evolution of JavaScript has been gradual but persistent. Over the course of the past decade, the perception of JavaScript has evolved from a simple toy language into a respected programming language used by corporations and developers across the globe to make incred- ible applications. The modern JavaScript programming language—as it has always been—is solid, robust, and incredibly powerful. Much of what I’ll be discussing in this book will show what makes modern JavaScript applications so different from what they used to be. Many of the ideas presented in this chapter aren’t new by any stretch, but their acceptance by thou- sands of intelligent programmers has helped to refine their use and to make them what they are today. So, without further ado, let’s look at modern JavaScript programming.";

// 1. quadratic solution. it returns in an Array.
const solveQuadratic = (a = 1, b = 0, c = 0) => {
    if (a === 0) {
        return 'Not a quadratic equation';
    }
    const determinate = b ** 2 - 4 * a * c;
    const solnSet = new Set();
    // const solnSet = new Array();

    let root1, root2;
    if (determinate === 0) {
        root1 = -b / (2 * a);
        solnSet.add(root1);
    } else if (determinate > 0) {
        root1 = ((-b + Math.sqrt(determinate)) / 2) * a;
        root2 = ((-b - Math.sqrt(determinate)) / 2) * a;
        solnSet.add(root1);
        solnSet.add(root2);
    } else {
    }
    return solnSet;
};
console.log(solveQuadratic()); //Set(1) {0}
console.log(solveQuadratic(1, 2, 3)); // Set(0) {}
console.log(solveQuadratic(1, 4, 4)); //Set(1) {-2}
console.log(solveQuadratic(1, -1, -2)); //{2, -1}
console.log(solveQuadratic(1, 7, 12)); //Set(2) {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}


// 2. Linear
const solveLinEquation = (a = 1, b = 0, c = 0) => {
    let x = (c - b) / a;
    if (a === 0) {
        return "not linear"
    } else {
        return x;
    }
}
console.log("X = " + solveLinEquation(5, 2, 22));
console.log("X = " + solveLinEquation(4, 1, 13));
console.log("X = " + solveLinEquation(8, 2, 18));
console.log("X = " + solveLinEquation(3, 6, 2));
console.log("X = " + solveLinEquation(4, 5, 2));


// 2. to check a valid JavaScript variable
const validateVar = v => {
}

//
// const sentence = 'I I I I I I I I I to  to love to read. I love to read in the morning; I love to read on the bus, I love to read at work and at home. I especially love to read before to to to bedtime.'

// const countWords = (sentence, word) => {
//     let s = sentence.split(/\W+/);
//     let total = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i].includes(word)) {
//             total = total + 1;
//         }
//     }
//     return total;
// }
// console.log(countWords(sentence, 'read'));



// 3. You should know how to count the most repeated words in a sentence, a paragraph or in a big chunk of text.
const wordsIn = s => {
    let tokens = s.split(/\W+/).sort((a, b) => a.length < b.length);
    let count = {};
    let keys = [];
    for (let i = 0; i < tokens.length; i++) {
        let word = tokens[i];
        if (count[word] === undefined) {
            count[word] = 1;
            keys.push(word);
        } else {
            count[word]++;
        }
    }
    keys.sort((a, b) => count[b] - count[a]);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        // return key + " : " + count[key];
    }
    return count;
}
console.log(wordsIn(myText));

// ***********

function wordsObj(t) {
    let tokens = t.split(/\W+/);
    let count = {};
    let keys = [];
    for (let i = 0; i < tokens.length; i++) {

        let word = tokens[i].toLowerCase();
        // keys.push(word);
        if (count[word] === undefined) {
            count[word] = 1;
            keys.push(word);
        } else {
            count[word] = count[word] + 1;
        }
    }
    return count;
}
console.log(wordsObj(myText));

///
function sum(...args){
    if(args.length === 1){
        const [fArg] = args;
        if(fArg instanceof args){
            return sum(...fArg);
        }
    }
    return args.reduce((a,b)=> a + b);
}
console.log(sum(2,3,4,10));


/// use localecompare function to sort an array.
const arrFruit=['mango', 'ananas','banana','apple','orange','cherry','carrot'];

const sortArr = arr =>{
    return arr.sort((a,b) => a.localeCompare(b));
}
console.log(sortArr(arrFruit));
