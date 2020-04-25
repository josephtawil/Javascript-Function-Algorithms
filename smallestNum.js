module.exports = function smallestNum(arr) {
    var smallest;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
        else {
            smallest = smallest;
        }
    }
    return smallest;
}