function showSalary(users, age) {
  let resultStr = "";

  let filterArray = users.filter((item) => item.age <= age);
  let nameArray = filterArray.map((item) => item.name);
  let balanceArray = filterArray.map((item) => item.balance);
  
  for (let i = 0; i < nameArray.length; i++) {
    resultStr +=
      i === nameArray.length - 1
        ? nameArray[i] + ", " + balanceArray[i]
        : nameArray[i] + ", " + balanceArray[i] + "\n";
  }

  return resultStr;
}
