/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
  //根据遍历的stra和strb模拟出string和value做比较
  function getPatternStr(stra, strb) {
    let arr = [];
    for (let item of pattern.split("")) {
      if (item === "a") arr.push(stra);
      if (item === "b") arr.push(strb);
    }
    return arr.join("");
  }

  //提前边界处理
  //模式和value都为空,返回true
  if (!pattern && !value) return true;

  //只有value模式为空  一定不能满足，返回false
  if (!pattern) return false;

  //模式只有一个值，无论value是什么，模式这个值等于value就一定能满足,返回true;
  if (pattern.length === 1) return true;

  //只有模式没有值，返回falsefalse
  if (!value) return false;

  //对只有a和只有b的字符串单独操作，提前判断加快速度
  if (pattern.indexOf("a") === -1 || pattern.indexOf("b") === -1) {
    if (value.length % pattern.length !== 0) {
      return false;
    } else {
      let str = value.substring(0, parseInt(value.length / pattern.length));
      if (new Array(pattern.length).fill(str).join("") === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  //la表示遍历的字符串a的长度，lb表示遍历字符串b的长度
  //lena表示模式中含有a的个数，lenb表示模式中含有b的个数
  let la, lb;
  let lena = 0;
  let lenb = 0;
  for (let item of pattern.split("")) {
    if (item === "a") lena++;
    if (item === "b") lenb++;
  }
  //遍历la的长度，根据la的长度遍历lb的长度，需要对边界lena,lenb为0不能做除数做特殊处理
  //如果有提前全a和全b的提前判断可以不用对lena和lenb做0的边界判断，因为前面就运行返回值了，不会执行到这里
  // let maxA = lena===0?0:Math.floor(value.length/lena);
  let maxA = Math.floor(value.length / lena);
  for (la = 0; la <= maxA; la++) {
    let allLb = value.length - la * lena;
    if (lenb === 0 || allLb % lenb === 0) {
      // lb = lenb===0?0:parseInt(allLb/lenb);
      lb = parseInt(allLb / lenb);
      //继续去计算a代表的值aStr,b代表的值bStr
      let aStr, bStr;
      if (pattern.charAt(0) === "a") {
        //根据位置截出aStr
        aStr = value.substring(0, la);
        let index = pattern.indexOf("b");
        bStr = value.substring(index * la, index * la + lb);
        //提前全a判断可不做此判断
        //两个字符串相同，舍弃这次结果
        if (aStr === bStr) continue;

        //计算模拟的值和value值是否相等
        if (getPatternStr(aStr, bStr) === value) return true;
      } else {
        //根据位置截出bStr
        bStr = value.substring(0, lb);
        let index = pattern.indexOf("a");
        aStr = value.substring(index * lb, index * lb + la);
        //提前全b判断可不做此判断
        //两个字符串相同，舍弃这次结果
        if (aStr === bStr) continue;

        //计算模拟的值和value值是否相等
        if (getPatternStr(aStr, bStr) === value) return true;
      }
    }
  }

  return false;
};
