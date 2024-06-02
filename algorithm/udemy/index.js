// function validAnagram(str1, str2) {
//   let result = true;
//   if (str1.length !== str2.length) return false;

//   const checktChar = (string) => {
//     const newObejct = {};
//     for (const st of string) {
//       const newSt = st.toLowerCase();
//       newObejct[newSt] = (newObejct[newSt] || 0) + 1;
//     }
//     return newObejct;
//   };

//   const str1Object = checktChar(str1);
//   const str2Object = checktChar(str2);
//   for (const key in str1Object) {
//     if (str1Object[key] !== str2Object[key]) result = false;
//   }

//   return result;
// }

function validAnagram(str1, str2) {
  let result = true;
  if (str1.length !== str2.length) return false;

  const newObejct = {};
  for (const st of str1) {
    const newSt = st.toLowerCase();
    newObejct[newSt] = (newObejct[newSt] || 0) + 1;
  }
  for (const st of str2) {
    const newSt = st.toLowerCase();
    if (!newObejct[newSt]) {
      result = false;
    } else {
      newObejct[newSt] -= 1;
    }
  }

  return result;
}

console.log(validAnagram("", "")); // false) // false
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); //false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext"));
