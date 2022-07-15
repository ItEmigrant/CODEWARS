function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

//opcja B
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];
    }
    let posCount = 0;
    let negSum = 0;
    for (let i = 0; i < input.length; i++) {
       if (input[i] > 0) {
        posCount++;
      } else {
        negSum += input[i];
      }
    }
    return [posCount, negSum];
  }

