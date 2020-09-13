/**
 * 课程表 II （拓扑排序、BFS）
 *
 * 时间复杂度：O(n + m)
 * 空间复杂度：O(n + m)
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const map = new Map();
  const inDegree = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;

    if (map.has(prerequisites[i][1])) {
      map.set(prerequisites[i][1], [...map.get(prerequisites[i][1]), prerequisites[i][0]]);
    } else {
      map.set(prerequisites[i][1], [prerequisites[i][0]]);
    }
  }

  const queue = [];
  const result = [];

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] == 0) queue.push(i);
  }

  while (queue.length) {
    const deQueue = queue.shift();
    result.push(deQueue);

    const enQueue = map.get(deQueue);

    if (enQueue && enQueue.length) {
      for (let i = 0; i < enQueue.length; i++) {
        if (--inDegree[enQueue[i]] == 0) queue.push(enQueue[i]);
      }
    }
  }

  return result.length == numCourses ? result : [];
};

const numCourses = 4;
const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

console.log(findOrder(numCourses, prerequisites));
