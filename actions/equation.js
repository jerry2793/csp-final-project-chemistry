function secondCapIndex(str) {
  // finds the second capitalized letter index
  var foundOnce = false;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      if (foundOnce) {
        return i;
      } else foundOnce = true;
    }
  }
  return -1;
}

function nextNumberIndex(str) {
  // console.log("next number index received str: ", str);
  var foundCap = false;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      if (isNaN(str[i])) {
        // if it is a string capitalized
        if (!foundCap) foundCap = true;
        else break;
      } else {
        // if it is a number
        return i;
      }
    }
  }
  return -1;
}

// console.log(nextNumberIndex("H2SO4"));

export function parseCompound(cmpd) {
  var elements = [];

  var index, item;
  if (!parseInt(cmpd[0])) {
    var coefficient = 1;
  } else {
    var coefficient = parseInt(cmpd[0]);
    cmpd = cmpd.substring(1);
  }

  // parse out all the elements from a single compound with subscripts
  var j = 0;
  while (cmpd.length > 0) {
    // console.log("inside loop, cmpd: ", cmpd, "j: ", j);
    if (!cmpd[j]) {
      break;
    }
    // if the letter is upper case: meaning it is a new element
    if (cmpd[j] === cmpd[j].toUpperCase()) {
      // console.log("found capitalized letter", cmpd[j]);
      index = nextNumberIndex(cmpd);
      // console.log("Index returned", index);
      // append the number of elements present
      // and find the element with a substring, character at 'index' is not included
      item = [
        // if index is -1, which means it will break the program
        // then the coefficient for that element should be 1
        index === -1 ? coefficient : parseInt(cmpd[index]) * coefficient,
        cmpd.substring(j, secondCapIndex(cmpd)),
      ];
      // console.log(item);
      // if is a string
      if (isNaN(item[1])) elements.push(item);

      // trim out the compound being appended to the elements
      if (index === -1) {
        cmpd = cmpd.substring(1);
      } else {
        cmpd = cmpd.substring(index + 1);
      }
      j--;
      // console.log("cmpd after trimming: ", cmpd);
    }
    j++;
  }

  // console.log(elements);

  // same element counted multiple times
  for (var i = 0; i < elements.length; i++) {
    for (var j = i + 1; j < elements.length; j++) {
      if (elements[i][1] === elements[j][1]) {
        elements[i][0]++;
        elements.splice(elements.indexOf(elements[j]), 1);
      }
    }
  }

  return elements;
}

/***************************************************************************
// please do not read there functions, they are not used in the program
// these will be the new 
function elementWithCoefficients(compoundList, coefficient) {
  // console.log(compoundList);
  // separate the reactants and products compounds into elements
  // with coefficients: multiple compounds
  const elements = [];
  var cmpd = "";
  var index;
  for (var i = 0; i < compoundList.length; i++) {
    // iterate over all compounds
    cmpd = compoundList[i];
  }

  for (var i = 0; i < elements.length; i++) {
    // remove repeating elements
  }

  return elements;
}

export function balance(reactants, products) {
  const rctnElements = elementWithCoefficients(reactants, 1);
  // console.log(rctnElements);
}
*/
