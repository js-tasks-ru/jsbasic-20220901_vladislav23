function getMinMax(str) {
  let numbArray = str.split(" ");

  numbArray.map((item, index) => {
    if (!+item) {
      numbArray.splice(index, 1);
    }
  });

  let arr = numbArray.map((item) => +item);
  let maxElem = arr[0];
  let minElem = arr[0];

  for (let elem of arr) {
    if (elem > maxElem) {
      maxElem = elem;
    } else if (elem < minElem) {
      minElem = elem;
    }
  }
  return { min: minElem, max: maxElem };
}
