
// A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years.
// Ask user for their salary and year of service and print the net bonus amount.


import java.util.Scanner;
public class Bonus {
public static void main (String[]args){
    int salary,experience , bonus ,amount; 
    Scanner sc = new Scanner (System.in);
    System.out.println("Enter your Experience in Years");
    experience = sc.nextInt();
    System.out.println ("Enter your Salary");
    salary = sc.nextInt ();
    if ( experience > 5 ){
        bonus = (salary*5)/100;
        amount = salary + bonus ;
        System.out.println("Congrats You get bonus of 5% " + amount );
    }
    else {
        System.out.println("Your Salary is " + salary );

    }
    sc.close();
}
    
}
