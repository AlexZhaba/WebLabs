const fillSpaces = (x, len = 6) => [...x.toString(), ...new Array(Math.max(0, len - x.toString().length)).fill(" ")].join("");

function generateMultiplicationTable(n) {
  let line = fillSpaces("");
  for (let i = 1; i < n + 1; i++) {
    line += fillSpaces(i);
  }
  console.log(line);

  for (let i = 1; i < n + 1; i++) {
    line = fillSpaces(i);
    for (let j = 1; j < n + 1; j++) {
      line += fillSpaces(i * j);
    }
    console.log(line);
  }
}

generateMultiplicationTable(5);

function showQuote(words, sym) {
  let max = -Number.POSITIVE_INFINITY;
  for (let word in words) {
    max = Math.max(max, word.length);
  };
  for (let word of words) {
    console.log(sym + fillSpaces(word) + sym)
  }
}

showQuote(['Hello', 'World', 'In', 'JS'], '*');

function combineArrays(arr1, arr2) {
  const generalLen = Math.min(arr1.length, arr2.length);
  const result = [];
  for (let i = 0; i < generalLen; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  if (arr1.length > arr2.length) {
    return [...result, ...arr1.slice(generalLen)];
  } else {
    return [...result, ...arr2.slice(generalLen)];
  }
}

console.log(combineArrays([1, 2, 3], ['a', 'b', 'c', 'd']));

const countSandwiches = ({ bread, cheese }) => Math.min(Math.floor(bread / 2), cheese);
console.log(countSandwiches({bread: 6, cheese: 2}));

function countUniqueValues(arr) {
  const map = {};
  for (elem of arr) {
    if (!map[elem]) {
      map[elem] = 1;
    } else {
      map[elem] ++;
    }
  }
  return map;
}
console.table(countUniqueValues([1,2,1,2,3,4,2,5]));