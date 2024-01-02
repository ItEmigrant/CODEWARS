//kata53
//If/else syntax debug
/*function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }

console.log(checkAlive (5))*/

function checkAlive (health) {
    return health > 0;
}

console.log(checkAlive (5))