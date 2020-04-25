module.exports = function largestNum(arr) {
    var largest = 0;
    for (var i = 0; i < arr.length; i++) {
        arr.sort();
        if (arr[i] > largest) {
            largest = arr[i];
        }
        else {
            largest = largest;
        }
    }
    return largest;

}

// module.exports = function largestNum(arr) {
//     var largest = 0;
//     for (var i = 0; i < arr.length; i++) {
//         arr.sort();
//         if (arr[i] > arr[i + 1]) {
//             largest = arr[i];
//         }
//         else {
//             largest = arr[i + 1];
//         }
//     }
//     return largest;

// }