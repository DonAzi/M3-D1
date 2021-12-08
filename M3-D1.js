/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function calcTheSum(one, two) {
  if (one === two) {
    return console.log((one + two) * 3);
  } else {
  }
}
calcTheSum(3, 3);

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
function checkInts(fi, se) {
  if (fi === 50 || se === 50) {
    return true;
  } else if (fi + se === 50) {
    return true;
  } else {
    console.log(
      "Natural Error: Please have a coffee and calm your brain cells"
    );
  }
}
console.log(checkInts(50, 50));
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
function removeCharacter(string, position) {
  // let charToRemove = stri.slice(charNum, charNum + 1);
  // return stri.replace(charToRemove, "");
  return string.slice(0, position) + string.slice(position + 1);
}
console.log(removeCharacter("Strive", 2));

/* 4. Create a function to find and return the largest of three given integers. */
// const findLargestInt = function (int1, int2, int3) {
//   if (int1 > int2 && int1 > int3) {
//     return int1;
//   } else if (int2 > int1 && int2 > int3) {
//     return int2;
//   } else {
//     return int3;
//   }
// };
// Tetiana's option
const findLargestInt = (...args) => {
  let largestInt = args.sort((a, b) => b - a);
  return largestInt[0];
};
console.log(findLargestInt(34, 444, 13, 1055, 98));
/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
const checkIfBetween = function (firstNo1, firstNo2) {
  if (firstNo1 >= 40 && firstNo1 <= 60 && firstNo2 >= 40 && firstNo2 <= 60) {
    return true;
  } else if (
    firstNo1 >= 70 &&
    firstNo1 <= 100 &&
    firstNo2 >= 70 &&
    firstNo2 <= 100
  ) {
    return true;
  } else {
    return "check it again";
  }
};
console.log(checkIfBetween(41, 42));
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
const createString = function (str, numOfCopies) {
  let newStr = "";
  for (let i = 0; i < numOfCopies; i++) {
    newStr = newStr.concat(str, " ");
  }
  return newStr;
};
console.log(createString("Bye2bye", 2));

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
const displayCityName = function (cityName) {
  if (cityName.slice(0, 3) === "Los" || cityName.slice(0, 3) === "New") {
    return cityName;
  } else {
    return false;
  }
};
console.log(displayCityName("NowYork"));
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
function sumArrayElements(threeArr) {
  return threeArr[0] + threeArr[1] + threeArr[2];
}
console.log(sumArrayElements([9, 91, " is my age eih"]));

/* 9. Create a function to test if an array of length 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

const isThereOneOrTwo = (arr) => {
  if (arr.includes(1) || arr.inludes(3)) {
    return true;
  } else {
    return false;
  }
};
isThereOneOrTwo([1, 7]);

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
function ifDoesNotThere(arr) {
  if (arr.includes(1) || arr.includes(3)) {
    return true;
  } else {
    return false;
  }
}
console.log(ifDoesNotThere([2, 9]));
/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

function longestStringInArray(stringest) {
  const temp = [];
  for (let i = 0; i < stringest.length; i++) {
    temp.push(stringest[i].length);
  }
  const giantic = temp.sort((a, b) => b - a);
  console.log(giantic[0]);
}
longestStringInArray(["Lidia", "Stefano", "Alessia"]);
/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
function findAngle(angl) {
  if (angl > 0 && angl < 90) {
    console.log("Acute angle");
  } else if (angl === 90) {
    console.log("Right angle");
  } else if (angl > 90 && angl < 180) {
    console.log("Obtuse angle");
  } else if (angl === 180) {
    return console.log("Straight");
  } else {
    console.error(TypeError);
  }
}
findAngle(180);

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
function findLarges(arr) {
  let result = arr.indexOf(Math.max.apply(null, arr));
  return result;
}
// console.log(result);

console.log(findLarges([12, 345, 6789, 0]));
/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

const findLargestEvenNum = function (anotherArr) {
  let emptyArr = [];

  for (let i = 0; i < anotherArr.length; i++) {
    let arrWrapper = anotherArr[i];

    if (arrWrapper % 2 === 0) {
      return emptyArr.push(arrWrapper);
    } else {
      return "NaEn";
    }
  }
};

console.log(findLargestEvenNum([42, 53, 49]));

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

function checkPosOrNegative(one, two) {
  if (Math.sign(one) > -1 && Math.sign(two) < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPosOrNegative(0, -1));
/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

function createFunction(str) {
  if (str < 3) {
    return str.toUpperCase();
  } else return str.slice(0, 3).toUpperCase() + str.slice(3).toLowerCase();
}
console.log(createFunction("Haha"));

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
const calculateTheSum = function (param1, param2) {
  let sum = param1 + param2;
  return sum > 50 && sum < 80 ? 65 : 80;
};
console.log(calcTheSum(19, 98)); //why it did not work ?
/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
    
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

const convertToString = (num) =>
  //
  {
    let toBe = "";
    if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
      return num;
    }
    if (num % 3 === 0) toBe += "Diego";
    if (num % 5 === 0) toBe += "Riccardo";
    if (num % 7 === 0) toBe += "Stefano";
    return toBe;
  };
console.log(convertToString(49090909099995));
/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

const convertToAcronym = (str) => {
  let emptyString = str.split(" ");
  let arr = [];

  for (let o = 0; o < emptyString.length; o++) {
    let letter = emptyString[o];
    arr.push(letter.charAt(0).toUpperCase());
  }
  return arr.join("");
};
console.log(convertToAcronym("world health organisation"));
