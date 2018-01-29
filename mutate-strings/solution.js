function mutateMyStrings(stringOne, stringTwo) {
  let result = stringOne + '\n';
  let arrOne = stringOne.split('');
  let arrTwo = stringTwo.split('');
  for (let i = 0; i < stringTwo.length; i++) {
    if(arrOne[i] !== arrTwo[i]) {
      arrOne[i] = arrTwo[i];
      result += arrOne.join('') + '\n';
    }
  }
  return result;
}