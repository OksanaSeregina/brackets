module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let array = [];
  let newString = str;
  for (let item of bracketsConfig) {
    array.push(item.join(""));
  }
  for (let i = 0; i <= str.length / 2; i++) {
    for (let item of array) {
      newString = newString.replace(item, "");
    }
  }
  return newString.length === 0;
};
