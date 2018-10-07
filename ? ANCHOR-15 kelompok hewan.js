function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort(function(a, b) {return a>b})

    var kelompok = []
    var result = []
     for ( var i = 0; i < animals.length-1; i ++ ){
         if(animals[i][0] === animals [i+1][0]) {
             kelompok.push(animals[i])

             if(i === animals.length -2){
              kelompok.push(animals[i+1])
              result.push(kelompok)
                }
             
            }else if(animals[i][0] !== animals[i+1][0]) {
                 kelompok.push(animals[i])
                 result.push(kelompok)
                 kelompok = []
                 if(i === animals.length-2){
                     kelompok.push(animals[i+1])
                     result.push(kelompok)
                 }
            }    
        }return result  
    }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
  
