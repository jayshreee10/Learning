// printing odd ascii numbers between A-Z

function isOdd() {
  const start = "A".charCodeAt(0);
  const stop = "Z".charCodeAt(0);

  for (i = start; i <= stop; i++) {
    if (i % 2 == 0) {
      console.log(String.fromCharCode(i) + " is a even value");
    } else {
      console.log(String.fromCharCode(i) + " is a odd value");
    }
  }
}
isOdd() 
