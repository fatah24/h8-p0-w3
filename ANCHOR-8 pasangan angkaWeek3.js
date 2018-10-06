function pasanganTerbesar(num) {
  var numStr = String(num);
  var arr = [];
  for(var i = 0; i < numStr.length-1; i++) {
    arr.push(numStr[i] + (numStr[i+1]))
    
  }  arr.sort(function(a, b){return b - a});  
  return arr[0]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
