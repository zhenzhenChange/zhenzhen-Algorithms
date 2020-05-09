exports.GenRandoms = function () {
  const ary = [];

  for (let i = 0; i < 8000000; i++) ary[i] = Math.floor(Math.random() * 8000000);

  return ary;
};
