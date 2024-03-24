// string manipulation

const User = function (name){
  let output = ''
 for (let i=0; i<name.length;i++)
 {
  output = output + name[i]+ "_" ;
   
 }
 console.log (output);

}
User("Jayshree");
