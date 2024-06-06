// Java Program to Find Sum of Fibonacci Series Numbers of First N Even Indexes

// The Fibonacci Series is the numbers in the below-given integer sequence.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ……


import java.util.Scanner ;
public class Fibonacci {

    public static void main (String []args){
        int start = 0 , stop = 1 , sum=0 , series;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the series point");
        series = sc.nextInt();
        System.out.println(0);
        System.out.println(1);

        for (int i = start ; i <= series ; i ++ ){
            sum = start + stop ;
            start = stop ;
            stop = sum ;

            System.out.println(sum); 
        }
        sc.close();;

    }
}