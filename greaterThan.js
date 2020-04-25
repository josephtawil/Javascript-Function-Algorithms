module.exports = function greaterThan(arr, index) {
    var array = [];
    for (var i = index + 1; i < arr.length; i++) {
        array.push(arr[i]);
    }
    return array;
}
//Another way of doing it
// module.exports = function greaterThan(arr, index) {
//     var greaterArray = [];
//     for (var i = index + 1; i < arr.length; i++) {
//         const element = arr[i];
//         greaterArray.push(element);
//     }
//     return array;
// }