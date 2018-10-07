var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(){
  input.splice([1],[2], "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice([4],[0],"Pria","SMA International Metro");
  console.log(input);
  console.log("\n");

 var splitted =  input[3].split("/");

 var bulan = Number(splitted[1]);
  
  switch(bulan){
  case 1:
  {bulan = "Januari";break}
    case 2:
  {bulan = "Februari";break}
    case 3:
  {bulan = "Maret";break}
    case 4:
  {bulan = "April";break}
    case 5:
  {bulan = "Mei";break}
    case 6:
  {bulan = "Juni";break}
    case 7:
  {bulan = "Juli";break}
    case 8:
  {bulan = "Agustus";break}
    case 9:
  {bulan = "September";break}
    case 10:
  {bulan = "October";break}
    case 11:
  {bulan = "November";break}
    case 12:
  {bulan = "Desember";break}
}
console.log(bulan);

result = [];
for(i = 0; i< splitted.length; i++){
  result.push(+splitted[i]);
}


result.sort(function(value1, value2) { return value1 < value2 });
console.log(result);

console.log(splitted.join("-"));

console.log(input[1].slice(0,15));
}



//console.log(input[1](0,14));




dataHandling2();
