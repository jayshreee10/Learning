import java.util.Scanner;
public class GCD{
public static void main (String[]args){
    Scanner sc = new Scanner (System.in);
    int num1 , num2 ;
    System.out.println("Enter num1");
    num1 = sc.nextInt();
    System.out.println("Enter num2");
    num2 = sc.nextInt();

    while ( num2 != 0){
        int i = num2 ;
         num2 = num1 % i ;
         num1 = i ; 
    }
    System.out.println(num1 + " HCF");
    sc.close();
}

}