console.log("************** DELIVERABLE 03 *********************");

function clone(source) {
  if (source === null || typeof source !== "object") {
    return source;
  }

  const target = Array.isArray(source) ? [] : {};
  for (const key in source) target[key] = clone(source[key]);

  return target;
}

const person = {
  name: "John",
  age: 30,
  nationalities: ["American", "Canadian"],
};
const clonedObject = clone(person);

console.log(clonedObject);

function merge(source, target) {
  return { ...target, ...source };
}

const additionalInfo = {
  hobbies: ["cooking", "traveling"],
  address: {
    city: "Los Angeles",
    country: "USA",
  },
};
const mergedObject = merge(additionalInfo, person);

console.log(mergedObject);
