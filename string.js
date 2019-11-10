// 1. Write a JavaScript function to check whether an`input` is a string or not.
const isString = (str) => {
	return typeof str === 'string' ? `${str} is STRING` : `${str} is not a STRING`;
};
console.log(isString('mostafa'));
console.log(isString('34'));
console.log(isString(34));

// 2.Write a JavaScript function to check whether a string is blank or not.
const isStringBlank = (str) => {
	return str.length === 0 ? `${str} is empty string` : `(${str}) has ${str.length} character.`;
};
console.log(isStringBlank(''));
