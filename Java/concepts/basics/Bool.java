// If
// x = 2
// y = 5
// z = 0
// then find values of the following expressions:
// a. x == 2
// b. x != 5
// c. x != 5 && y >= 5
// d. z != 0 || x == 2
// e. !(y < 10)
public class Bool {
    public static void main (String[]args){
        int x,y,z;
        boolean result=true ;
        x = 2 ; y = 5 ; z = 0 ;
        if (x == 2 ){
           System.out.println (result) ;
        }
        else{
            System.out.println (result=false) ;
        }
         if (x != 5 ) {
            System.out.println (result) ;
        }
        else{
            System.out.println (result=false) ;
        }
         if (x != 5 && y >= 5){
            System.out.println (result) ;
        }
        else{
            System.out.println (result=false) ;
        }
         if(z != 0 || x == 2){
            System.out.println (result) ;
        }
        else{
            System.out.println (result=false) ;
        }
         if (!(y < 10) ){
            System.out.println (result) ;
        }
        
        else{
            System.out.println (result=false) ;
        }
    }
}
