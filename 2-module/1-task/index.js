function sumSalary(salaries) {
  let newSalariesObj = [];
  let sumSalaries = 0;

  for (key in salaries) {
    if (typeof (salaries[key]) === "number") {
      if (!isNaN(salaries[key]) && salaries[key] != Infinity && salaries[key] != -Infinity) {
        newSalariesObj.push(salaries[key]);
      }
    }
  }

  if (newSalariesObj.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < newSalariesObj.length; i++) {
      sumSalaries += newSalariesObj[i];
    }
    return sumSalaries;
  }
}
