function add(str) {
  let numbers = "";
  if (str == "" || str == 1) {
    return Number(str * 1);
  }
  if (str[0] == "/" && str[1] == "/" && /\d/.test(str[str.length - 1])) {
    numbers = getDelimiter(str);
  } else if (
    str.match(/[\n]/) ||
    (/\d/.test(str[str.length - 1]) &&
      /[-\d\d]/.test(str[0]) &&
      str.match(/[\/]/g) == null)
  ) {
    numbers = str.split(/[\,\n]+/);
  }
  if (str.match(/.+(?=\/\/)/g) != null && /\n/.test(str) == true) {
    throw new Error("invalid input");
  }
  if (str.match(/\d$/g) == null && str.length > 0) {
    throw new Error("invalid input");
  }
  if (str.toString().match(/-\d+/g)) {
    throw Error("negatives not allowed " + str.toString().match(/-\d+/g));
  }
  return numbers
    .filter(function numbersLessThan1000(num) {
      return num < 1000;
    })
    .reduce((sum, n) => parseInt(sum) + parseInt(n));
}
function getDelimiter(str) {
  let delimiter = str.match(/\[(.*?)\]/g);
  let expression = str.slice(str.search("\n") + 1, str.length);
  if (delimiter == null) {
    return expression.split(str.slice(2, str.search("\n")));
  }
  for (let i = 0; i < delimiter.length; i++) {
    expression = expression.split(delimiter[i].slice(1, -1)).join(" ");
  }
  return expression.split(" ");
}

console.log(add(""));

module.exports = { add };
