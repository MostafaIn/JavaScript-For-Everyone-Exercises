$_$wp(1);
function getRandomNumber(min, max) {
    $_$wf(1);
    return $_$w(1, 0), Math.round(Math.random() * (max - min) + min);
}
function getRandomString(len) {
    $_$wf(1);
    let str = ($_$w(1, 1), '');
    for (let i = 0; $_$w(1, 2), i < len; i++) {
        const code = ($_$w(1, 3), getRandomNumber(65, 90));
        $_$w(1, 4), str += String.fromCharCode(code);
    }
    return $_$w(1, 5), str;
}
function zeroPad(str, len) {
    $_$wf(1);
    return $_$w(1, 6), `${ str }`.padStart(len, '0');
}
function isPrime(num) {
    $_$wf(1);
    if ($_$w(1, 7), num < 1) {
        return $_$w(1, 8), false;
    } else if ($_$w(1, 9), num <= 3) {
        return $_$w(1, 10), true;
    } else if ($_$w(1, 11), ($_$w(1, 12), num % 2 === 0) || ($_$w(1, 13), num % 3 === 0)) {
        return $_$w(1, 14), false;
    }
    let i = ($_$w(1, 15), 5);
    while ($_$w(1, 16), i * i <= num) {
        if ($_$w(1, 17), ($_$w(1, 18), num % i === 0) || ($_$w(1, 19), num % (i + 2) === 0)) {
            return $_$w(1, 20), false;
        }
        $_$w(1, 21), i += 6;
    }
    return $_$w(1, 22), true;
}
function arrayRange(min, max) {
    $_$wf(1);
    return $_$w(1, 23), new Array(max - min + 1).fill(0).map((item, idx) => {
        $_$wf(1);
        return $_$w(1, 24), min + idx;
    });
}
function answer1() {
    $_$wf(1);
    for (let i = 1; $_$w(1, 25), i <= 7; i++) {
        $_$w(1, 26), $_$tracer.log('Integrify \uD83D\uDCA9'.repeat(i), '\'Integrify \\uD83D\\uDCA9\'.repeat(i)', 1, 26);
    }
}
function answer2() {
    $_$wf(1);
    for (let i = 1; $_$w(1, 27), i <= 100; i++) {
        if ($_$w(1, 28), ($_$w(1, 29), i % 3 === 0) && ($_$w(1, 30), i % 5 === 0)) {
            $_$w(1, 31), $_$tracer.log(i, 'FizzBuzz', 'i', 1, 31);
        } else if ($_$w(1, 32), i % 3 === 0) {
            $_$w(1, 33), $_$tracer.log(i, 'Fizz', 'i', 1, 33);
        } else if ($_$w(1, 34), i % 5 === 0) {
            $_$w(1, 35), $_$tracer.log(i, 'Buzz', 'i', 1, 35);
        }
    }
}
function findMax() {
    $_$wf(1);
    const arr = ($_$w(1, 36), [...arguments]);
    let biggest = ($_$w(1, 37), 0);
    for (let i = 0; $_$w(1, 38), i < arr.length; i++) {
        if ($_$w(1, 39), arr[i] > biggest) {
            $_$w(1, 40), biggest = arr[i];
        }
    }
    return $_$w(1, 41), biggest;
}
function answer3() {
    $_$wf(1);
    const biggestNumber = ($_$w(1, 42), findMax(1, 3, 4, 5, 6, 4, 30, 20));
    $_$w(1, 43), $_$tracer.log('Biggest number is:', biggestNumber, '', 1, 43);
}
function reverseArray(arr) {
    $_$wf(1);
    const reversed = ($_$w(1, 44), []);
    for (let i = arr.length - 1; $_$w(1, 45), i >= 0; i--) {
        $_$w(1, 46), reversed.push(arr[i]);
    }
    return $_$w(1, 47), reversed;
}
function answer4() {
    $_$wf(1);
    const reversed = ($_$w(1, 48), reverseArray([
        1,
        2,
        3
    ]));
    $_$w(1, 49), $_$tracer.log('Reversed array is: ', reversed, '', 1, 49);
}
function modifyArray(arr) {
    $_$wf(1);
    if ($_$w(1, 50), arr.length < 5) {
        return $_$w(1, 51), 'Not Found';
    }
    return $_$w(1, 52), arr.map((item, index) => {
        $_$wf(1);
        if ($_$w(1, 53), index === 4) {
            return $_$w(1, 54), item.toUpperCase();
        }
        return $_$w(1, 55), item;
    });
}
function answer5() {
    $_$wf(1);
    $_$w(1, 56), $_$tracer.log(modifyArray([
        'One',
        'Two',
        'Three',
        'Microsoft',
        'APPLE',
        'Blah blah',
        'Damn'
    ]), 'modifyArray([\n    \'One\',\n    \'Two\',\n    ...', 1, 56);
}
function answer6() {
    $_$wf(1);
    const numbers = ($_$w(1, 57), []);
    while ($_$w(1, 58), numbers.length < 7) {
        const randomNum = ($_$w(1, 59), getRandomNumber(0, 9));
        if ($_$w(1, 60), !numbers.includes(randomNum)) {
            $_$w(1, 61), numbers.push(randomNum);
        }
    }
    $_$w(1, 62), $_$tracer.log(numbers, 'numbers', 1, 62);
}
function sum(...arr) {
    $_$wf(1);
    return $_$w(1, 63), arr.reduce((final, item) => {
        $_$wf(1);
        return $_$w(1, 64), final + item;
    }, 0);
}
function answer7() {
    $_$wf(1);
    const sumOfNumbers = ($_$w(1, 65), sum(1, 2, 3, 4));
    $_$w(1, 66), $_$tracer.log('Sum is', sumOfNumbers, '', 1, 66);
}
function removeMiddleItem(arr, ...replacement) {
    $_$wf(1);
    const midPointIndex = ($_$w(1, 67), (arr.length - 1) / 2);
    const howManyToRemove = ($_$w(1, 68), Math.floor(midPointIndex) !== Math.ceil(midPointIndex) ? ($_$w(1, 69), 2) : ($_$w(1, 70), 1));
    $_$w(1, 71), arr.splice(Math.floor(midPointIndex), howManyToRemove, ...replacement);
    return $_$w(1, 72), arr;
}
function answer8() {
    $_$wf(1);
    $_$w(1, 73), $_$tracer.log(removeMiddleItem([
        1,
        2,
        3
    ], 4, 5, 6), 'removeMiddleItem([\n    1,\n    2,\n    3\n]...', 1, 73);
    $_$w(1, 74), $_$tracer.log(removeMiddleItem([
        1,
        2,
        3,
        4
    ], 4, 5, 6), 'removeMiddleItem([\n    1,\n    2,\n    3,\n...', 1, 74);
}
function answer9() {
    $_$wf(1);
    const text = ($_$w(1, 75), 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.');
    const numbers = ($_$w(1, 76), text.match(/[\d]+/g).map(num => {
        $_$wf(1);
        return $_$w(1, 77), Number(num);
    }));
    const [salary, annualBonus, courses] = ($_$w(1, 78), numbers);
    const yearlyIncome = ($_$w(1, 79), salary * 12 + annualBonus + courses * 12);
    $_$w(1, 80), $_$tracer.log('Yearly income: ', yearlyIncome, '', 1, 80);
}
function yourFunc(str1, str2) {
    $_$wf(1);
    return $_$w(1, 81), str1.endsWith(str2);
}
function answer10() {
    $_$wf(1);
    $_$w(1, 82), $_$tracer.log(yourFunc('integrity', 'ity'), 'yourFunc(\'integrity\', \'ity\')', 1, 82);
    $_$w(1, 83), $_$tracer.log(yourFunc('integration', 'tio'), 'yourFunc(\'integration\', \'tio\')', 1, 83);
    $_$w(1, 84), $_$tracer.log(yourFunc('connection', 'sion'), 'yourFunc(\'connection\', \'sion\')', 1, 84);
    $_$w(1, 85), $_$tracer.log(yourFunc('connection', 'tion'), 'yourFunc(\'connection\', \'tion\')', 1, 85);
}
function genCarPlateNum() {
    $_$wf(1);
    $_$w(1, 86), $_$tracer.log(`${ getRandomString(3) }-${ getRandomNumber(100, 999) }`, '`${ getRandomString(3) }-${ getRandomNum...', 1, 86);
}
function getSocialSecurityNum() {
    $_$wf(1);
    const dd = ($_$w(1, 87), zeroPad(getRandomNumber(1, 31), 2));
    const mm = ($_$w(1, 88), zeroPad(getRandomNumber(1, 12), 2));
    const yy = ($_$w(1, 89), zeroPad(getRandomNumber(0, 99), 2));
    const key = ($_$w(1, 90), getRandomNumber(100, 999));
    const hash = ($_$w(1, 91), getRandomString(1));
    $_$w(1, 92), $_$tracer.log(`${ dd }${ mm }${ yy }-${ key }${ hash }`, '`${ dd }${ mm }${ yy }-${ key }${ hash }...', 1, 92);
}
function primeDetect() {
    $_$wf(1);
    const range = ($_$w(1, 93), arrayRange(0, 100));
    const primes = ($_$w(1, 94), range.filter(num => {
        $_$wf(1);
        return $_$w(1, 95), isPrime(num);
    }));
    $_$w(1, 96), $_$tracer.log(primes, 'primes', 1, 96);
}
$_$w(1, 97), primeDetect();
$_$wpe(1);