let myArr = [100, 205, 396, 107, 829, 721, 950];
// given arr specific index value = index + own value
// function addIndexToArr() {
  //   for (i = 0; i < myArr.length; i++) {
//     // console.log (myArr[i])
//     console.log(myArr[i] + i);
//   }
// }
// // printArr();

// sum of all elements in array

// function addElementsOfArr() {
//   let sum = 0;
//   for (i = 0; i < myArr.length; i++) {
//     let value = myArr[i];
//     sum = value + sum;
//   }
//   console.log(sum);
// }
// addElementsOfArr();

// even number sum and odd number sum
// function filterNumber() {
//   let evenNumbersum = 0;
//   let oddNumbersum = 0;
//   for (i = 0; i < myArr.length; i++) {
//     if (myArr[i] % 2 == true) {
//       evenNumbersum = evenNumbersum + myArr[i]
    
//     }
//     if (myArr[i] % 2 == false) {
//       oddNumbersum =  oddNumbersum + myArr[i]
//     }
    
//   }
//   console.log(evenNumbersum + " sum of even number");
//   console.log(oddNumbersum + " sum of odd number");
// }
// filterNumber()


//write a program to display the current and next element at one place
// op : [100,205]
//      [205,396]

// function sortingArr(){
//   for (i=0;i<myArr.length;i++){
//     if(i == (myArr.length-1)){  //to get array last element
//       console.log (myArr[i],myArr[0]) // printing the last value with the first value 
//     }
//     else console.log (myArr[i],myArr[i+1]) //printing all the values with their next value
//   }
// }
// sortingArr()


// op :[ 305 , 601 , 503 .....1050]

// function sortingArr(){
//   let myNewArr=[]; // empty array
//   for (i=0;i<myArr.length;i++){
//     let  newArr = 0;
//     if(i == (myArr.length-1)){  //to get array last element
//      newArr = (myArr[i] + myArr[0]) ;    
//       myNewArr.push (newArr )   //assigning value to empty array
//     }
//     else {
//       newArr = myArr[i]+ myArr[i+1] //adding all the values with their next value
      
//       myNewArr.push (newArr )   }
//   }
//   console.log(myNewArr)
// }

// new approach

function sortingArr(){
  for (i=0;i<myArr.length;i++){
    let  newArr = 0;
    if(i == (myArr.length-1)){  //to get array last element
     newArr = (myArr[i] + myArr[0]) ;    
        myArr[i]= newArr
    }
    else {
      newArr = myArr[i]+ myArr[i+1] //adding all the values with their next value
      myArr[i]= newArr
  }
}
  console.log(myArr)
}
sortingArr()