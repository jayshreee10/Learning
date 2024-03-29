let myArr = [100, 205, 396, 107, 829, 721, 950];
// op :[ 305 , 601 , 503 .....1050]
/* 
 step 1 :   array traversing using for loop 
 step 2 :   storing index number in a variable 
 step 3 :   for last index add a condition to print with first index
 step 4 :   else print the desired condition 
 step 5 :   put that into the exsiting array 
 step 6 :   print the array ;
 */

//soliving palindrome
//  word : level

// function palindrome (word){
//     let  wordLength = word.length
//     let message = ""
//     for (i=0;i<= wordLength/2;i++){
//         // console.log(word[i]);
//         let palindromeWord = (wordLength  - 1 - i )
//         // console.log(  palindromeWord )
//         if( word[i] != word[palindromeWord] ){
//             message = "not a palindrome word"
//         }
//         else { message =  "is a palindrome word"}
//     }
//     console.log (message)

// }
// palindrome ( "level")

//another approach
// madam

function palindrome(word) {
  let wordLength = word.length;
  let newWord = "";
  let message = "";
  for (i = wordLength; i >= 0; i--) {
    newWord = word[i]+ newWord;
    if (newWord != word) {
      message = "not a palindrome word";
    } 
    else {
      message = "is a palindrome word";
    }
  }
  console.log(message);
}

palindrome("level");
