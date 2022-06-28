function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
  let sum1 = 0;
  for (var i=0; i<classPoints.length; i++) {
    sum = sum + classPoints[i];    
  }
sum = sum / classPoints.length;
sum1 = (sum+yourPoints)/2;
  if (yourPoints > sum1) {
    return true;
  }
  else {
    return false;
  }
}