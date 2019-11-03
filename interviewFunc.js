const sentences = 'this is me this me is mostafa me mostafa';

const removeRepeatedWords = (str) => {
	let arr = str.split(' ');
	let arr2 = [];
	for (const item of arr) {
		if (arr2.indexOf(item) === -1){
            arr2.push(item);
        }
	}
	return arr2.join(' ');
};
console.log(removeRepeatedWords(sentences));

