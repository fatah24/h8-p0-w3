
function palindrome(kata) {
    var terbalik = '';
    for(var i = kata.length; i >= 0; i--) {
    terbalik += kata.charAt(i)
    }
     if(kata === terbalik) {
      return true
    } else {
      return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false