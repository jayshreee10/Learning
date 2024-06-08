// Java Program to Find Sum of Fibonacci Series Numbers of First N Even Indexes
import java.util.Scanner;
public class FibonacciSum {
    public static void main(String[]args){
        Scanner sc = new Scanner ( System.in);
        int start = 0 , stop = 1 , num , sum = 0 , newNum= 0;
        System.out.println("Enter the nth term");
        num = sc.nextInt();
        System.out.println(start);
        System.out.println(stop);

        for (int i = start ; i<=num ; i++  ){

            sum = start + stop ;
            start =   stop  ;
            stop = sum ;
            System.out.println (sum);
            newNum = stop + newNum  ;
            }
            System.out.println (newNum + 1);

        sc.close();
    }
}
