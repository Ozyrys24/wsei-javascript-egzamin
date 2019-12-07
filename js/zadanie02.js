function concatArray(array1, array2) {
    for (const el in array2) {
        array1.push(array2[el]);
    }
    return array1;
}

console.log(concatArray([1, 3], [3, 5]));