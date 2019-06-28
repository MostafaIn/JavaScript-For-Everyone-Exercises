console.log('*****************************  TEST TWO SOLUTION   ***********************************');

/* Write a function which count the number of occurrence of words in a paragraph or a sentence.
The function countWords takes a paragraph and two words as parameters.
It compare which word is most frequently occurred in the paragraph.*/
const countWords = (para, w1, w2) => {
    let count1 = 0;
    let count2 = 0;
    let word1;
    let word2;
    const p = para.split(' ');
    for (word1 of p) {
        if (word1.toLowerCase().includes(w1.toLowerCase())) {
            count1++;
        }
    }
    for (word2 of p) {
        if (word2.toLowerCase().includes(w2.toLowerCase())) {
            count2++;
        }
    }
    if (count1 < count2) {
        return `The word ${w2}(${count2}) more frequently occurred than ${w1}(${count1}).`
    } else if (count1 > count2) {
        return `The word ${w1}(${count1}) more frequently occurred than ${w2}(${count2}).`
    } else {
        return `The word ${w1}(${count1}) is the same frequently occurred than ${w2}(${count2}).`
    }
};

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph, 'teaching', 'you'));


// 2. Write a function which takes an array parameter and returns an array of the data types of each item:
const checkDataTypes = p => {
    const e = [];
    p.forEach(element => {
        e.push(typeof element);
    });

    return e;
}
const arr = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }];
console.log(checkDataTypes(arr));
const mixedData = ["John", 25, "David", 30, "Sara", 22];
console.log(checkDataTypes(mixedData));

// 3. Create a function which filter ages greater than 18.
const agesGreater18 = agesArr => {
    // const arr= [];
    // agesArr.filter( age =>{
    //     if(age >= 18){
    //         arr.push(age);
    //     }
    // })
    // return arr;
    return agesArr.filter(age => age >= 18);
}
const ages = [35, 30, 17, 18, 15, 22, 16, 20];
console.log(agesGreater18(ages));

let total = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i];
}
console.log(total);

// 4. Write a function which calculate the average age of the group.
const averageAge = (agesArr) => {
    let total = 0;
    for (let i = 0; i < agesArr.length; i++) {
        total += agesArr[i];
    }
    let avg = total / agesArr.length;
    return Math.ceil(avg);
}
console.log(averageAge(ages));


// 5. Write a function named shuffle, it takes an array parameter and it returns a shuffled array. 
const shuffle = (arr) => {
    let currentIndex = arr.length;
    let temp, randIndex;
    while (0 !== currentIndex) {
        randIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temp = arr[currentIndex]
        arr[currentIndex] = arr[randIndex]
        arr[randIndex] = temp
    }
    return arr;

}
console.log(shuffle(ages));

///////////////////////////
const shuffle2 = (arr) => {  // the source is in cssTrick
    arr.sort(() => {
        return 0.5 - Math.random()
    })
    return arr;
}
const c = [1, 2, 3, 4, 5];
console.log(shuffle2(c));


// 6. Write a function which can generate a random Finnish car code.
const genCarPlateNum = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let l = '';
    let n = '';
    for (let i = 0; i < 3; i++) {
        l += letters.charAt(Math.floor(Math.random() * letters.length));
        n += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    let carPlate = `${l} - ${n}`;
    return carPlate;
}
console.log(genCarPlateNum());

/* 7. The following shopping cart has four products. 
Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

const addProduct = (addedItem) => {
    shoppingCart.push(addedItem);
    const myShoppingCart = shoppingCart;
    return myShoppingCart;
};
console.log(addProduct('Meat'));


const editProduct = (editedItemIndex, newItem) => {
    shoppingCart.splice(editedItemIndex, 1, newItem);
    const myShoppingCart = shoppingCart;
    return myShoppingCart;
}
console.log(editProduct(3, 'Suger'));


const removeProduct = (removedItemIndex) => {
    shoppingCart.splice(removedItemIndex, 1);
    const myShoppingCart = shoppingCart;
    return myShoppingCart;
}
console.log(removeProduct(4));

const removeAll = (arr) => {
    while (arr.length > 0) {
        arr.pop()
    }
    return arr;
}
console.log(removeAll(shoppingCart));


/* 8. The following todoList has three tasks. 
Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll functions to modify the todoList.*/
const todoList = [];

const displayTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const hour = date.getHours();
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    return `${day}/${month}/${year} ${hour}:${minute}`;
}
console.log(displayTime());


const addTask = (task, time, completed) => {
    const newTask = todoList.push({ task, time, completed });
    return newTask;
}
console.log(addTask('Prepare JS Test', displayTime(), true));
console.log(addTask('Give JS Test', displayTime(), false));
console.log(addTask('Assess Test Result', displayTime(), false));
console.log(addTask('scape', displayTime(), false))
console.log(todoList);
console.log(todoList[2]);

const removeTask = (taskIndex) => {
    return todoList.splice(taskIndex, 1);
}
console.log(removeTask(3));
console.log(todoList);



const editTask = (index, task, time, completed) => {
    return todoList.splice(index, 1, { task, time, completed });
}
console.log(editTask(1, 'JS Test is TODAY', displayTime(), false));
console.log(todoList);



// 9. Write a function which check if items of an array are unique?
const checkUniqueness = (arr) => {
    let uniq = true;
    // for (const item of arr) {
    //     if (arr.indexOf(item) != arr.lastIndexOf(item)) {
    //         uniq = false;
    //     }
    // }
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
            uniq = false;
        }
    }
    return uniq;
}
const a = [1, 2, 3, 4, 5, 6, 7];
const b = [1, 2, 3, 4, 5, 2];
console.log(checkUniqueness(a));
console.log(checkUniqueness(b));

/* 10. Write a function which filter users who has scoresGreaterThan85, 
Write a function which addUser to the user array only if the user does not exist. 
Write a function which addUserSkill which can add skill to a user only if the user exist. 
Write a function which editUser if the user exist in the users array.*/
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];
console.log(users);

const mostafa = {
    name: 'mostafa',
    scores: 90,
    skills: ['React'],
    age: 34
}

const addUser = (arr, user) => {
    for (const usr of arr) {
        if (usr.name === user.name) {
            return 'this username is exist.'
        }
    }
    arr.push(user);
    return arr;
}
console.log(addUser(users, mostafa));
console.log(addUser(users, mostafa));


const scoresGreaterThan85 = () => {
    let topScore = [];
    users.filter(user => {
        if (user.scores >= 85) {
            topScore.push(user);
        }
    })
    return topScore;
}
console.log(scoresGreaterThan85());

const addUserSkill = (arr, name, skill) => {
    let found = false;
    for (const user of arr) {
        if (user.name === name) {
            user.skills.push(skill);
            found = true;
            return arr;
            break;
        }
    }
    if (!found) {
        return ' this user does not exist ';
    }
}
console.log(addUserSkill(users, 'mostafa', 'Asp.net'));
