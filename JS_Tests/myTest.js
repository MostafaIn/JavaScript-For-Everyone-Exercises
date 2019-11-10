// javascript test 2

/* 1.a) A weight of an object is different on differents planet and it is calculated as w = mg. 
Write a function which calculate the weight of an object. It takes mass and gravity as a parametr. 
If the gravity is not given assume it is earth and the the approximate gravity of the earth is 10 m/s2.
 A wieght of a 100 kg object on different planets is as follows: */
const weight = (m, g = 10) => {
    let w = m * g;
    return w.toFixed();
}
console.log(weight(100));
console.log(weight(100, 25));
console.log(weight(100, 0.58));
console.log(weight(100, 1.62));

// 1. b) Write a function which takes mass of an object and name of a planet and it returns the weight of the object in the planet. Different gravities in m/s2:
const planets = { 'sun': 274, 'jupiter': 25, 'Earth': 9.79, 'Venus': 8.87, 'Mars': 3.71, 'Moon': 1.62 };
console.log(Object.keys(planets));
const weightOfObject = mass => {

}

// 2. Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?";
const cleanText = txt => {
    const cleanTxt = txt.replace(/[^a-zA-Z ]/g, "");
    return cleanTxt;
}
console.log(cleanText(sentence));


// 3. After cleaning the text in the sentence from question number 2 you will get the following text. Count the number of words in this text. Don't include words with only one letter.
const paragraph = "I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?";
const countWords = txt => {
    let words = txt.split(/\W+/);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 1) {
            count++;
        }
    }
    return count;
}
console.log(countWords(paragraph));


// 4. How many words were used to construct this sentence. Now, don't exclude one letter words.
const varietyOfWords = txt => {
    const text = txt.replace(/[^a-zA-Z ]/g, "").split(/\W+/);
    const w = new Set();
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        w.add(text[i]);
        count = w.size;
    }
    return count;
}
console.log(varietyOfWords(sentence));

/* 5. Create a function called countOnlyMainWords which count verbs which main importance in the sentence.
 The function return an object with keys words which is going to be array of main words and count,
  the number of main words. */
const supportWords = ['I', 'me', 'mine', 'myself', 'you', 'yours', 'yourself', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'we', 'us', 'our', 'ours', 'ouselves', 'they', 'them', 'themselves', 'be', 'been', 'being', 'am', 'is', 'was', 'are', 'were', 'do', 'does', 'did', 'done', 'has', 'have', 'had', 'will', 'would', 'can', 'could', 'may', 'might', 'shall', 'should', 'and', 'but', 'than', 'the', 'an', 'as', 'a', 'any', 'to', 'if', 'in', 'into', 'there', 'this', 'that', 'those', 'more', 'most', 'many', 'much', 'less', 'for', 'by', 'of', 'at', 'on', 'or', 'not', 'how', 'who', 'what', 'which', 'whose', 'when', 'why', 'where', 'so', 'also'];
const countOnlyMainWords = (txt) => {
    const words = cleanText(txt).split(' ');
    const w = [];
    for (let item of supportWords) {
        for (let i = 0; i < words.length; i++) {
            if (!words[i].includes(item)) {
                w.push(words[i]);
            }
        }
    }

    return w;
}
console.log(countOnlyMainWords(sentence));





/* 6. Write a function called headAndTail which find the head or tail of the array. 
Head is the first five elements in the array and similarly tail is the last five elements in the array.
 First, check the array has more than five elements if not return the array itself.
  And, also check if the parameter passed is an array if not return an appropriate feedback. */
const numbers = [1, 3, 6, 8, 11, 4, 5, 10, 9];
const headAndTail = list => {
    let head = [];
    let tail = [];
    let i = list.length - 1;
    let count = 0;
    let feedback = 'the array length is less than 5 items';
    if (Array.isArray(list)) {
        if (list.length >= 5) {
            for (let i = 0; i < 5; i++) {
                head.push(list[i]);
            }
            while (count !== 5) {
                tail.push(list[i]);
                i--;
                count++;
            }
            return { head, tail: tail.reverse() };
        } else {
            return { head, tail, list, feedback: feedback };
        }
    } else {
        return { head, tail, list, feedback: feedback };
    }
}
console.log(headAndTail(numbers).head);
console.log(headAndTail(numbers).tail);

/* 7. Write a function called stat, it takes only an array as a parameter and 
calculates mean, median, mode and range from students JavaScript test array.*/
const scores = [37, 34, 49, 57, 70.5, 61, 67.5, 90, 66.5, 70, 35.5, 44, 43, 29, 12.5, 95, 57, 36.5, 88, 33, 77.5, 82.5];

const stat = list => {
    const mean = list => {
        let total = 0;
        for (let i = 0; i < list.length; i++) {
            total += list[i];
        }
        let result = total / list.length;
        return result.toFixed(2);
    };
    const median = list => {
        let mid = 0;
        let numLength = numbers.length;
        list.sort();
        if (numLength % 2 === 0) {
            mid = (list[numLength / 2 - 1] + list[numLength / 2]) / 2;
        } else {
            mid = list[(numLength - 1) / 2];
        }
        return mid;
    }
    const mode = list => {
        let modes = [];
        let count = [];
        let maxIndex = 0;
        for (let i = 0; i < list.length; i += 1) {
            let num = list[i];
            count[num] = (count[num] || 0) + 1;
            if (count[num] > maxIndex) {
                maxIndex = count[num];
            }
        }
        for (let i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(i);
                }
            }
        return modes;
    }
    const range = list => {
        list.sort();
        const theRange = [list[0], list[list.length - 1]];
        return theRange;
    }

    return {
        mean: mean(list),
        median: median(list),
        mode: mode(list),
        range: range(list)
    };
}
console.log(stat(scores).mean);
console.log(stat(scores).median);
console.log(stat(scores).mode);
console.log(stat(scores).range);

/* 8. Write two functions which are called arrayOfRgbColors and arrayOfHexaColors which
 take positive integer as parameter. */

// a. arrayOfRgbColors:
const arrayOfRgbColors = (n = 1) => {
    const colorArr = [];

    for (let i = 0; i < n; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let color = `rgb(${r},${g},${b})`;
        colorArr.push(color);
    }
    return colorArr;
}
console.log(arrayOfRgbColors());
console.log(arrayOfRgbColors(3));
console.log(arrayOfRgbColors(5));

// b. arrayOfHexaColors
const arrayOfHexaColors = (n = 1) => {
    const colorArr = [];
    for (let i = 0; i < n; i++) {
        let r = Math.floor(Math.random() * 256).toString(16);
        let g = Math.floor(Math.random() * 256).toString(16);
        let b = Math.floor(Math.random() * 256).toString(16);
        r = (r.length === 2) ? r : '0' + r;
        g = (g.length === 2) ? g : '0' + g;
        b = (b.length === 2) ? b : '0' + b;
        let color = `#${r}${g}${b}`;
        colorArr.push(color);
    }
    return colorArr;
}
console.log(arrayOfHexaColors());
console.log(arrayOfHexaColors(3));
console.log(arrayOfHexaColors(5));

/* 9. Write a function called arrayOfHexaOrRgb which generate an array of hexa or rgb colors:*/
const arrayOfHexaOrRgb = (colorType, n = 1) => {
    let hexa = colorType.toLowerCase();
    let rgb = colorType.toLowerCase();
    if (hexa === "hexa" || hexa === 'hexadecimal') {
        return arrayOfHexaColors(n);
    } else if (rgb === "rgb") {
        return arrayOfRgbColors(n);
    } else if (colorType == undefined) {
        return arrayOfHexaColors();
    }
}
// console.log(arrayOfHexaOrRgb());
console.log(arrayOfHexaOrRgb('hexa'));
console.log(arrayOfHexaOrRgb('Hexa'));
console.log(arrayOfHexaOrRgb('Hexadecimal'));
console.log(arrayOfHexaOrRgb('hexa', 5));
console.log(arrayOfHexaOrRgb('rgb'));
console.log(arrayOfHexaOrRgb('RGB'));
console.log(arrayOfHexaOrRgb('rgb', 3));

