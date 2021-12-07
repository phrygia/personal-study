const soluction = (arr) => {
  const length = arr.length;
  let indexMin;

  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      console.log("indexMin : ", indexMin, arr[indexMin], " j : ", j, arr[j]);
      if (arr[indexMin] > arr[j]) indexMin = j;
    }
    console.log("-----------", i, indexMin);
    if (i !== indexMin) {
      const aux = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = aux;
    }
  }
  return arr;
};
console.log(soluction([13, 5, 11, 7, 23, 15]));

//
