function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var rasio = 0
    var kelipatan = []
    for (i = 0; i < arr.length-1; i++){
        rasio = arr[i+1]/arr[i]
        kelipatan.push(rasio)
    }
     //console.log(rasio);
     //console.log(kelipatan);
     var check = true
    for (j = 0; j < kelipatan.length-1; j++){
        if (kelipatan[j+1]!==kelipatan[j]){
            check = false
            
        }
         console.log(kelipatan);
         
    }
   return check
        
    }


  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false