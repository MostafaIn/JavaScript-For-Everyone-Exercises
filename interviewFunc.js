// A. a javascript program to remove the repeated words and return clear sentences.

const sentences = 'this is me this me is mostafa me mostafa';

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




// B. this program create and array of objects with merging two array
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

