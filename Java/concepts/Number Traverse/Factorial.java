// Java Program for factorial of a number

import java.util.Scanner ;
public class Factorial {
    public static void main (String [] args){
        int num , factorial = 1 ;
        Scanner sc = new Scanner (System.in);
        System.out.println("Enter the number");
        num = sc.nextInt();

        for (int i=1; i <= num ; i++ ){
            factorial = factorial * i ;
          
        }
        System.out.println(factorial + " is the desired factorial of " + num );

        sc.close();
    }
}
