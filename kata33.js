function expressionMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, a * (b + c), (a + b) * c, a + b * c, a * b + c);
  }

  //opcja B
  function expressionMatter(a, b, c) {
    let result = Math.max(a+b+c,
          a*b*c,
          a*b+c,
          a*(b+c),
          a+b*c,
          (a+b)*c);
    return result// highest achievable result
  }