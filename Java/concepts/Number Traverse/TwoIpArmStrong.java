// Java Program to Check Armstrong Numbers between two numbers
import java.util.Scanner;
public class TwoIpArmStrong {
    public static void main (String[]args){
        int start,stop,num;
        System.out.println("Enter the starting number");
        Scanner sc = new Scanner( System.in);
        start = sc.nextInt();
        System.out.println("Enter the starting number");
        stop = sc.nextInt();

        for ( int i = start ; i <= stop ; i++ ){

            num = i ; int sum=0 ;
            while (num != 0){
             int rmd = num%10;
                num = num/10;
                sum = sum + (rmd*rmd* rmd);
                // System.out.println(sum + "sum");


            }
            if (sum == i ){
                System.out.println(i + " is a Armstrong Number");
            }
            else{
                System.out.println(i + " is not a Armstrong Number");

            }

        }
sc.close();
    }
}
