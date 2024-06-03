// Java Program to Display All Prime Numbers from 1 to N
import java.util.Scanner ;
public class Prime
 {

static  boolean isPrime (int num){
    for ( int i = 2 ; i< num ;i++ )
    {

        if(num%i== 0 ){
          return false ;  
        }  
        
    }
    return true ;
}
public static void main(String []args){
        
        int x,y ;
        System.out.println("Enter the starting number");
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();
        System.out.println("Enter the ending number");
        y=sc.nextInt();

        for (int i = x ; i<= y ; i++){
            if ( i == 0 || i == 1 ){
                System . out.println(i + " is neither prime nor composite");
            }
            else if (i == 2 || y == 2){
                System .out.println(i + " is a prime number");
            }
            else {
            boolean prime = isPrime(i) ;
             if(prime == true){
                System.out.println(i + " is a prime number ");
                
            }
            else {
                System.out.println( i + " is not a prime number");
            }
        }
        }
        
        sc.close();
    }
}
