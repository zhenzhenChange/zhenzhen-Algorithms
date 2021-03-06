/**
 * Fizz Buzz
 *
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var ary = [];
  let i = 1;

  while (i <= n) {
    if (i % 3 == 0 && i % 5 == 0) {
      ary[i] = 'FizzBuzz';
    } else if (i % 3 == 0) {
      ary[i] = 'Fizz';
    } else if (i % 5 == 0) {
      ary[i] = 'Buzz';
    } else {
      // ary.push(i + ''); // 比调用函数要快
      ary[i] = i + '';
    }

    i++;
  }

  ary.shift();
  return ary;
};

var n = 15;
var result = fizzBuzz(n);
console.log(result);
