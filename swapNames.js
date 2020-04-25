module.exports = function swapNames(arr, index1, index2) {
    var temp = 0;
    //create a temporary variable that you set it to the index1 value of the array
    //then you set that value to the index2 value of the array
    //then you set the value of index2 to the temporary variable that stores the value of index1.
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}