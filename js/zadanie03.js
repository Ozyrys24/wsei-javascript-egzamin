function bigestSumOfTwoElements(array) {
    if (array.length == 0) return false;
    else if (array.length == 1) return array[0];
    else {
        array.sort((x, y) => x - y);
        return array[array.length - 1] + array[array.length - 2];
    }
}

console.log(bigestSumOfTwoElements([1, 2, 3, 4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23, 45, 17, 12]));