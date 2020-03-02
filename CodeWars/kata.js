// 1. YOU ARE A SQUARE!

const isSquare = n => Math.sqrt(n) % 1 === 0;

console.log(isSquare(8));
console.log(isSquare(0));
console.log(isSquare(22));
console.log(isSquare(64));


// 2. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
const sheepsList = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true]

const countList = () =>{
    return sheepsList.filter(Boolean).length
};
console.log(countList())
