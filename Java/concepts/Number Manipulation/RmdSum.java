import java.util.Scanner;

public class RmdSum {
    public static void main (String[]args){
        Scanner sc = new Scanner (System.in);
        int num ,rmd = 0, sum = 0 ; ;
        System.out.println("Enter the number");
        num = sc.nextInt();
       int i = num ;
        while (i != 0){
            rmd = i % 10 ;
            i = i / 10 ;
            System .out .println(rmd + " reminder after iteration"); 
            sum  = sum + rmd ;
        }
        System .out .println(sum + " sum of all the reminders");
        sc.close();
    }
}


/*
 * num = 123 
 * i = 123 != 0
 * rmd = 123%10 = 3 
 * i = 123/10 = 12
 * sum = 0 + 3 = 3
 * i  = 12
 * remd = 12% 10 = 2 
 * sum = 3+ 2 
 * i = 1 
 * remd = 1% 10 = 1 ;
 * sum = 5+1 
 * 
 * 
 */