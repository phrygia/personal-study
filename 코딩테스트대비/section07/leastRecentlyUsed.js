const soluction = (size, arr) => {
    const ar = new Array(size).fill(0);
    ar[0] = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if(ar.includes(arr[i])) {
            ar.unshift(arr[i])
            if(ar.length > size) ar.pop();
        } else {
            ar.splice(ar.indexOf(arr[i]),1)
            ar.unshift(arr[i])
        }
    }

    // arr.forEach(x => {
    //     let pos = -1;
    //     for (let i = 0; i < size; i++) if(x === ar[i]) {
    //         pos = i;
    //         break
    //     }
    //     if(pos === -1) {
    //         // console.log(ar)
    //         for (let j = ar.length-1; j >= 0; j--) {
    //             ar[j] = ar[j-1];
    //         }
    //         ar[0] = x
    //     } else {
    //         for (let j = pos; j >= 0; j--) {
    //             ar[j] = ar[j-1];
    //         }
    //         ar[0] = x;
    //     }
    //     console.log(pos, x, ar)
    // })
    return ar
};
console.log(soluction(5, [1,2,3,2,6,2,3,5,7]));
