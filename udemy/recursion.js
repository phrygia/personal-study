/*
자기 자신을 호출 (스스로 호출) 
*/

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      // console.log(helperInput[0], "1", result);
      result.push(helperInput[0]);
    }

    // console.log(helperInput.slice(1), "2", result);
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

function pureCollectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    console.log(arr[0], " <- arr[0]", newArr);
    newArr.push(arr[0]);
  }

  console.log(
    pureCollectOddValues(arr.slice(1)),
    " <- pureCollectOddValues(arr.slice(1))",
    newArr
  );
  newArr = newArr.concat(pureCollectOddValues(arr.slice(1)));
  console.log(newArr, " <- newArr");
  return newArr;
}

// console.log(collectOddValues([1, 2, 3, 4]));
console.log(pureCollectOddValues([1, 2, 3, 4]));
