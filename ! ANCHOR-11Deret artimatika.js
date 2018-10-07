function tentukanDeretAritmatika(arr) {
    var beda = 0
    var selisih = [] 
    for (i = 0; i < arr.length-1; i++){
        beda = arr[i+1]-arr[i]
        selisih.push(beda)
        // console.log(beda);
        
        // console.log(selisih);
    }
    var check = true
    for (j = 0; j < selisih.length-1; j++){
        if (selisih[j+1]!==selisih[j]){
            check = false
            
        }
         console.log(selisih);
         console.log(check);
    }
   return check   
  } 

  
//   TEST CASES
// //console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
//                                  //  0  1  2  3  4  5


 console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
//  //console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
//  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
//  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false