function sumArray(arr) {
    var sum = 0;
    var restSum;
    console.log(arr);
    
    if (arr === null || arr.length === 1 || arr.length === 0) {
      return 0;
    } else {
        for (i = 0; i < arr.length; i++) {
          sum += arr[i];
          restSum = sum - (Math.max(...arr) + Math.min(...arr));
        }
        return restSum;
      }
  }