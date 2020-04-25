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