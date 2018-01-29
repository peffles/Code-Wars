// reverse the letters in the sentence
function reverser(sentence) {
  let array = sentence.split(' ');
  let newArray = [];
  for(var i = 0; i < array.length; i++) {
    let str = [];
    for(var j = array[i].length -1; j >= 0; j--) {
      str.push(array[i][j]);
    }
    newArray.push(str.join(''));
  }
  return newArray.join(' ');
}