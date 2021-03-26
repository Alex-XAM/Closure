'use strict';

const array = () => {
  const dataArray = [];
  const x = (i) => dataArray[i];
  x.push = (a) => dataArray.push(a);
  x.pop = () => dataArray.pop();
  return x;
};

module.exports = { array };
