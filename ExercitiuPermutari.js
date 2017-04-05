function swap (litere, index1, index2) {
  var temp = litere[index1];
  litere[index1] = litere[index2];
  litere[index2] = temp;
  return litere;
}

function permutare (litere, startIndex, sfIndex) {
  if (startIndex === sfIndex) {
	console.log(litere.join(''));
  } else {
    var i;
    for (i = startIndex; i <= sfIndex; i++) {
      swap(litere, startIndex, i);
      permutare(litere, startIndex + 1, sfIndex);
      swap(litere, i, startIndex); // backtrack
    }
  }
}

var litere = ['A','B','C'];
permutare(litere, 0, litere.length-1); // ABC, ACB, BAC, BCA, CBA, CAB
