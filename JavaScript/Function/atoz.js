// printing a to z

function alphabets (){
  let start = "a".charCodeAt(0);
  let stop = "z".charCodeAt(0);
  for (i = start; i <= stop; i++) {
    console.log(String.fromCharCode(i));
  }

}
alphabets()