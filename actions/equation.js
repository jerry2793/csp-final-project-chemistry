function nextNumberIndex(str) {
  // finds the first occuring index of a number
  // if cannot: returns -1
  var l = "";
  var isNum = false;
  for (var i = 0; i < str.length; i++) {
    l = str[i];

    // if this is already in another element
    // then break the loop,
    if (l === l.toUpperCase()) {
      break;
    }

    // otherwise
    // if the letter is a number
    for (var j = 0; j < 10; j++) {
      if (l.indexOf(j) !== -1) {
        isNum = true;
        break;
      }
    }

    if (isNum) {
      return i;
    }

    // reset it for next iteration
    isNum = false;
  }
  return -1;
}

function elementWithCoefficients(compoundList, coefficient) {
  console.log(compoundList);
  // separate the reactants and products compounds into elements
  // with coefficients: multiple compounds
  const list = [];
  var cmpd = "";
  var index;
  for (var i = 0; i < compoundList.length; i++) {
    // iterate over all compounds
    cmpd = compoundList[i];

    // parse out all the elements from a single compound with subscripts
    for (var j = 0; j < cmpd.length; j++) {
      // if the letter is upper case: meaning it is a new element
      if (cmpd[j] === cmpd[j].toUpperCase()) {
        index = nextNumberIndex(cmpd[j]);
        // append the number of elements present
        // and find the element with a substring, character at 'index' is not included
        list.push([
          // if index is -1, which means it will break the program
          // then the coefficient for that element should be 1
          index === -1 ? coefficient : cmpd[index] * coefficient,
          cmpd.substring(j, index),
        ]);

        // trim out the compound being appended to the list
        cmpd = cmpd.substring(index + 1);
      }
    }
  }

  for (var i = 0; i < list.length; i++) {
    // remove repeating elements
  }

  return list;
}

export function balance(reactants, products) {
  const rctnElements = elementWithCoefficients(reactants, 1);
  console.log(rctnElements);
}
