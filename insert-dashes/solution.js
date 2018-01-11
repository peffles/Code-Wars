function insertDash(num) {
  var previousNum = '';
  var newString = '';
  num = num.toString();
  for (var i = 0; i < num.length; i++){
    var currentNum = parseInt(num[i]) % 2 === 0 ? 'even' : 'odd';
    // Conditional operator or ternary operator ?: is an inline shorthand if-statement.   
    if (currentNum === 'odd' && previousNum === 'odd'){
      newString = newString + '-' + num[i];
      previousNum = 'odd';
    } else {
      newString = newString + num[i];
      previousNum = currentNum;
    }
  }
  return newString;
}