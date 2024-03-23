// // months between march to june - summer 
// // months between july to septmber-monsoon 
// // months between october to december - winter

// // let inputMonth='january'
// //  

// //  let season = january;
// // if (inputMonth === summer ){
// // console.log('summer season months are '+ summer);
// // }
// // else if (inputMonth === monsoon){
// // console.log('monsoon season months are '+ monsoon);
// // }
// // else if (inputMonth === winter){
// // console.log('winter season months are '+ winter);
// // }

// // else {
// // console.log('this is spring season');
// // }
// let summer = march,april,may,june
//   let monsoon= july,august,septmber
// //  let winter = october,november,december
// if (inputMonth === "january" ){
//     console.log('summer season');
//     }
//     else if (inputMonth === monsoon){
//     console.log('monsoon season months are '+ monsoon);
//     }

let inputMonth = "january";

let summer = ["march", "april", "may", "june"];
let monsoon = ["july", "august", "september"];
let winter = ["october", "november", "december"];

if (summer.includes(inputMonth)) {
  console.log(inputMonth + " is a summer month");
} else if (monsoon.includes(inputMonth)) {
  console.log(inputMonth + " is a monsoon month");
} else if (winter.includes(inputMonth)) {
  console.log(inputMonth + " is a winter month");
} else {
  console.log(inputMonth + " is a spring month");
}





