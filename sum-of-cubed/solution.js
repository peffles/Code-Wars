function cubeOdd(arr) {
  let sum = 0;
  let test = function findOdd(num) {
    if (num% 2 !== 0) {
      return num;
    } else {
      return undefined;
    }
  };
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    } else if (test(arr[i]) !== undefined){
      sum += Math.pow(arr[i], 3);
    }
  }
  return sum;
}
