// let myArr = [100, 205, 396, 107, 829, 721, 950];
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

// function sortingArr(){
//   for (i=0;i<myArr.length;i++){
//     let  newArr = 0;
//     if(i == (myArr.length-1)){  //to get array last element
//      newArr = (myArr[i] + myArr[0]) ;
//         myArr[i]= newArr
//     }
//     else {
//       newArr = myArr[i]+ myArr[i+1] //adding all the values with their next value
//       myArr[i]= newArr
//   }
// }
//   console.log(myArr)
// }
// sortingArr()

// function loops () {

//   for (i=1 ; i<=1000; i=i*2){

//     console.log (i)
//     // i = i+2
//   }
// }
// loops ()
// intialization of the array index ;
// condition checking
// incrementing the index value in a loop ;

// 1,4,7,10,13,17,20,23,27 ....100

// 1,2,4,8,16,32,64,128,256...

//input 1,2,3,4,5
// output 3,7,13,21,31
// 1 * 2 + 1
// 2 * 3 + 1
// 3 * 4 + 1
// function seriesOne(){
//   for (i=0 ; i<=10 ; i++){
//     let printValue = i * (i+1)+1 ;
//     console.log (printValue)
//   }
// }
// seriesOne()

// 1*1 + 2
// 2*2 + 3
// 3*3 + 4

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// 1+0
// 1+1
// 2+1
// 3+2
// function fibonacci() {
//   let opArr = [];
//   let firstNum = 0;
//   let secondNum = 1;
//   opArr.push(firstNum, secondNum);
//   console.log(firstNum, secondNum);
//   for (i = 0; i <= 10; i++) {
//     let nextNum = firstNum + secondNum;
//     opArr.push(nextNum);
//     firstNum = secondNum;
//     secondNum = nextNum;
//   }
//   console.log(opArr);
// }
// fibonacci();

// printing table

// function table(num) {
//   let opTableArr = [];
//   for (let i = 1; i <= 10; i++) {
//     let opTable = num * i;
//     opTableArr.push(opTable);
//   }
//   console.log(opTableArr);
// }
// table(112);


// calculator logic 

function calculator (num1,operator,num2,){
  if (operator == "-"){
    console.log (num1 - num2)
  }
  else if (operator == "+"){
    console.log (num1 + num2)
  }
  else if (operator == "*"||operator == "x"||operator == "X" ){
    console.log (num1 * num2)
  }
  else if (operator == "/"){
    console.log (num1 / num2)
  }
  else ("invalid")
  console.log ()
}
calculator (1,"+",2)
