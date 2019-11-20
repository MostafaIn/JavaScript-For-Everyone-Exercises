// 1. a javascript program to remove the repeated words and return clear sentences.

const sentences = 'this is me this me is mostafa me mostafa this this';

const removeRepeatedWords = (str) => {
	let arr = str.split(' ');
	let arr2 = [];
	for (const item of arr) {
		if (arr2.indexOf(item) === -1) {
			arr2.push(item);
		}
	}
	return arr2.join(' ');
};
console.log(removeRepeatedWords(sentences));

const removeRepeatedWords2 = (str) => {
	let arr = str.split(' ');
	let softArr = [...new Set(arr)];
	return softArr.join(' ');
};
console.log(removeRepeatedWords2(sentences));

// 2. this program create and array of objects with merging two array
let names = ['mosi', 'rohy', 'edi', 'mori', 'dany', 'ss'];
let ages = [34, 32, 30, 31, 2];

const returnObj = () => {
	let list = [];
	let person = new Object();
	for (let i = 0; i < names.length; i++) {
		for (let i = 0; i < ages.length; i++) {
			if (ages[i] === null) {
				return `no declared`;
			}
		}
		person = { name: names[i], age: ages[i] };
		list.push(person);
	}
	return list.filter((e) => e.age < 31);
};
console.log(returnObj());

// 3. a javascript program to count the items of an array and return an object of any item and its count.
const myFruits = [
	'apple',
	'mango',
	'ananas',
	'banana',
	'apple',
	'apple',
	'ananas',
	'mango',
	'apple',
	'orange',
	'mango',
	'orange',
	'banana',
	'banana',
	'graps',
];
// first option
const countItems = (arr) => {
	return arr.reduce((countItem, item) => {
		countItem[item] = (countItem[item] || 0) + 1;
		return countItem;
	}, {});
};
console.log(countItems(myFruits));

// second option
const countItem2 = (arr) => {
	const itemsCount = {};
	for (let item of arr) {
		itemsCount[item] = itemsCount[item] ? itemsCount[item] + 1 : 1;
	}
	return itemsCount;
};
console.log(countItem2(myFruits));

//
