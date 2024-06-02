// A shop will give discount of 10% if the cost of purchased quantity is more than 1000.
// Ask user for quantity
// Suppose, one unit will cost 100.
// Judge and print total cost for user.
// x * 10% = y ; x-y = amount ;

import java.util.Scanner ;
public class WordProblem {
    public static void main ( String[] args){
        int total,discount,finalAmount ;
        Scanner sc = new Scanner (System.in);
        System.out.println("Enter Your Total Bill");
        total = sc.nextInt();
        if (total >= 1000){
            discount = (total*10) / 100 ;
            finalAmount = total - discount ;
            System.out.println("Your Total Bill is " + finalAmount);
        }
        else {
            System.out.println("Your Total Bill is " + total);

        }
        sc.close();
    }
}
