/**
 * 单词接龙（广度优先搜索）
 *
 * 时间复杂度：O(n^2 * CharLength)
 * 空间复杂度：O(n^2)
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let wordId = new Map(); //单词到id的映射
  let idWord = []; //id到单词的映射
  let edges; //存边用的数组

  let id = 0;
  // 将wordList所有单词加入wordId中 相同的只保留一个  并为每一个单词分配一个id
  for (let word of wordList) {
    if (!wordId.has(word)) {
      wordId.set(word, id++);
      idWord.push(word);
    }
  }

  // 若endWord不在wordList中 则无解
  if (!wordId.has(endWord)) return [];

  // 把beginWord也加入wordId中
  if (!wordId.has(beginWord)) {
    wordId.set(beginWord, id++);
    idWord.push(beginWord);
  }

  // 初始化存边用的数组
  edges = new Array(idWord.length);
  for (let i = 0; i < idWord.length; i++) edges[i] = [];

  // 添加边
  for (let i = 0; i < idWord.length; i++) {
    for (let j = i + 1; j < idWord.length; j++) {
      // 若两者可以通过转换得到 则在它们间建一条无向边
      if (transformCheck(idWord[i], idWord[j])) {
        edges[i].push(j);
        edges[j].push(i);
      }
    }
  }

  let dest = wordId.get(endWord); //目的id
  let res = []; //保存结果
  let cost = new Array(id); //到每个点的代价
  for (let i = 0; i < id; i++) {
    cost[i] = Number.MAX_VALUE; // 每个点的代价初始化为无穷大
  }

  // 将起点加入队列 并将其cost设为0
  let queue = [];
  let tmpBegin = [];
  tmpBegin.push(wordId.get(beginWord));
  queue.unshift(tmpBegin);
  cost[wordId.get(beginWord)] = 0;

  //开始广度优先搜索
  while (queue.length !== 0) {
    let now = queue.pop();
    let last = now[now.length - 1]; // 最近访问的点

    if (last === dest) {
      // 若该点为终点则将其存入答案res中
      let tmp = [];
      for (let index of now) {
        tmp.push(idWord[index]); // 转换为对应的word
      }
      res.push(tmp);
    } else {
      for (let i = 0; i < edges[last].length; i++) {
        let to = edges[last][i];
        // 此处<=目的在于把代价相同的不同路径全部保留下来
        if (cost[last] + 1 <= cost[to]) {
          cost[to] = cost[last] + 1;
          // 把to加入路径中
          let tmp = now.map((ele) => ele);
          tmp.push(to);
          queue.unshift(tmp); // 把这个路径加入队列
        }
      }
    }
  }

  // 两个字符串是否可以通过改变一个字母后相等
  function transformCheck(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length && i < str2.length && diff < 2; i++) {
      if (str1.charAt(i) !== str2.charAt(i)) diff++;
    }
    return diff === 1;
  }

  return res;
};

var beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(findLadders(beginWord, endWord, wordList));
