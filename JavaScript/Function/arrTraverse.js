
let myArr = [100, 205, 396, 107, 829, 721, 950];

// given arr specific index value = index + own value
function addIndexToArr() {
  for (i = 0; i < myArr.length; i++) {
    // console.log (myArr[i])
    console.log(myArr[i] + i);
  }
}
// printArr();

// sum of all elements in array

function addElementsOfArr() {
    let sum = 0 ;
    for (i = 0; i < myArr.length; i++) 
    {
      let value = myArr[i];
      sum = value + sum
    }
    console.log (sum)
  }
  addElementsOfArr()
  
  // even number sum and odd number sum 
  // op :[ 305 , 601 , 503 .....1050]
  //  