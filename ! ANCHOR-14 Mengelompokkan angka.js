function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var kelompokGenap = []
    var kelompokGanjil = []
    var kelipatan3 = []
    var result = []
    for (i = 0; i < arr.length; i++){
        //arr[i]
        //console.log(arr[i])
        if (arr[i] %3 === 0){
            kelipatan3.push(arr[i])
        }
        else if (arr[i] %2 === 1){
            kelompokGanjil.push(arr[i])   
        }
        else {
            kelompokGenap.push(arr[i])
        }
    }
    // console.log('kelopok genap :'+ kelompokGenap);
    // console.log('kelompok ganjil :'+ kelompokGanjil);
    // console.log('kelipatan3 :'+ kelipatan3);

    result.push(kelompokGenap)
    result.push(kelompokGanjil)
    result.push(kelipatan3)
    //console.log(result);
   
    return result
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  