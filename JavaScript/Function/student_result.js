// let result = function addition(a,b){
//     let sum = a+b
//     return sum
//     }
//     addition(2,3);

//     console.log(result);

// write a function to take 5 inputs of marks and check percentage and pass or fail

// function studentsResult(mark,totalmark){
//     let percentage =( mark/totalmark)*100;
//     return percentage;
// }
// let marksinput = studentsResult (50,70);
// console.log("Your percentage is  " + marksinput);
// if (marksinput >= 30)
// {
//     console.log("you paased");
// }
// else
// {
// console.log("you failed");
// }

function studentsResult(S1, S2, S3, S4, S5) {
  let mark = S1 + S2 + S3 + S4 + S5;
  const totalmark = 500;
  let percentage = (mark / totalmark) * 100;
  return percentage;
}

function IsPassed(marksinput) {
  if (marksinput >= 30) {
   return true;
  }
    else {
    return false;
  }
  
}

let marksinput = studentsResult(60, 20, 12, 44, 70);

let resultsOut = IsPassed(marksinput);

if ( resultsOut == true){
    console.log("Your percentage is  " + marksinput);
    console.log ("passed")
}
// else
// {
// console.log ("failed")
// }