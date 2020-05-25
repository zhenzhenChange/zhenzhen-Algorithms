/**
 * 0146.LRU 缓存机制
 *
 * 时间复杂度：O(1)
 * 空间复杂度：O(n)
 *
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.max = capacity;
  this.keys = new Set();
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    this.keys.delete(key);
    this.keys.add(key);
  }

  return this.cache.get(key) || -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const cacheKey = this.cache.has(key);

  this.cache.set(key, value);

  if (cacheKey) {
    this.keys.delete(key);
    this.keys.add(key);
  } else {
    this.keys.add(key);

    if (this.keys.size > this.max) {
      const first = Array.from(this.keys)[0];
      this.cache.delete(first);
      this.keys.delete(first);
    }
  }
};

var LRUCache = function (capacity) {
  this.max = capacity;
  this.keys = new Set();
  this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
  // => 若当前 key 存在，访问时交换位置到最后（最后的是最近访问的）
  if (this.cache.has(key)) {
    this.keys.delete(key);
    this.keys.add(key);
  }

  return this.cache.get(key) || -1;
};

LRUCache.prototype.put = function (key, value) {
  const cacheKey = this.cache.has(key);

  this.cache.set(key, value);

  // => 为 false 说明是新增的，否则就是已经存在，上一行已经重新赋值。
  // => 这里在 keys 集合里交换位置，和 get 时处理方式一样
  if (cacheKey) {
    this.keys.delete(key);
    this.keys.add(key);
  } else {
    this.keys.add(key);

    // => 当集合的大小超过的设定值
    if (this.keys.size > this.max) {
      // => 拿取第一个元素，分别在 Set 集合和 Map 集合中删除
      // => 最耗时的应该是这里，因为要将集合转换成真正的数组
      const first = Array.from(this.keys)[0];

      this.cache.delete(first);
      this.keys.delete(first);
    }
  }
};

var cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);

console.log(cache.get(1)); // 返回 1

cache.put(3, 3);

console.log(cache.get(2)); // 返回 -1

cache.put(4, 4);

console.log(cache.get(1)); // 返回 -1
console.log(cache.get(3)); // 返回 3
console.log(cache.get(4)); // 返回 4
