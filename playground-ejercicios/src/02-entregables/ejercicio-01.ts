console.log("************** DELIVERABLE 01 *********************");

const array = [1, 2, 3, 4, 5];

const head = (array) => {
  const [first] = array;
  return first;
};

console.log(head(array));

const tail = (array) => {
  const [, ...rest] = array;
  return rest;
};

console.log(tail(array));

const init = (array) => array.slice(0, -1);

console.log(init(array));

const last = (array) => {
  const [lastElement] = array.slice(-1);
  return lastElement;
};

console.log(last(array));
