// these are fundamental javascript exercises


/* Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one. */
// method 1.
const compareObjects = (obj, source) => {
   return  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
}
objectOne = {
    name: "mostafa",
    age: 34,
    country: "Afg"
};
objectTwo = {
    name: 'rohy',
    age: 32,
    country: 'fin'
};
objectThree={
    // name:'rohy',
    age:32,
    country:'fin'
}
console.log(compareObjects(objectOne, objectTwo));
console.log(compareObjects(objectTwo,objectThree))

// method 2.
const obj_1 = { 'one': 1, 'two': 2, 'three': 3 };
const obj_2 = { 'one': 1, 'four': 4, 'five': 5 };
const obj_3 = { 'one': 1, 'two': 2, 'three': 3 };

areEqual = (obj1, obj2) => {
    let entries1 = Object.entries(obj1);
    let entries2 = Object.entries(obj2);
    let checkArray = [];
    entries1.map((item, itemIndex) => item.map((it) => {
        if (!entries2[itemIndex].includes(it)) {
            checkArray.push(false);
        }
    }))
    if (checkArray.includes(false)) {
        return false
    } else {
        return true
    };
}

console.log(areEqual(obj_1, obj_2));
console.log(areEqual(obj_1, obj_3)); 

const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false