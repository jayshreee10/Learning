// Java Program for compound interest {

// Compound Interest = P(1 + R/100)t
// Where,
// P is principal amount
// R is the rate and
// T is the time span
// }

import java.util.Scanner;

public class CI {
    public static void main (String[]args){
        double P,R,t;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your principle amount");
        P = sc.nextDouble();
        System.out.println("Enter your rate");
        R=sc.nextDouble();
        System.out.println("Enter your time period");
        t = sc.nextDouble();

       double cmdint = Math.pow(  ( P + (P*R)/100), t);
       System.out.println("Your Compound Interest is "+ cmdint);

        sc.close();
    }
}
