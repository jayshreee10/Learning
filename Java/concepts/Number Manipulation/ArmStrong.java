// Java Program to Check Armstrong Number 
import java.util.Scanner ;
public class ArmStrong {
    public static void main (String[]args){
        int num ;
        System.out.println("Enter a number") ;
        Scanner sc = new Scanner (System.in);
        num = sc.nextInt();

        int i = num ,sum=0;
        while (i != 0 ){
           int reminder = i%10 ;
           i = i/10;
           sum = sum + (reminder*reminder*reminder);
          
        }
        if (sum == num){
            System.out.println(num + " is a Armstrong number");
        }
        else {
            System.out.println(num + " is not a Armstrong number");
        }
        sc.close();
    }
// static boolean IsArmStrong (num){

// }

}