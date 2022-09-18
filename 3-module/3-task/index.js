function camelize(str) {
  let splitArray = str.split('-');
  let ucFirstArray = [];

  for (let i = 1; i < splitArray.length; i++) {
    let word = splitArray[i];

    ucFirstArray.push(word[0].toUpperCase() + word.slice(1, word.length));
  }

  return splitArray[0] + ucFirstArray.join("");
}
