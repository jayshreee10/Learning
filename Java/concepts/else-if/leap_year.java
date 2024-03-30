import java.util.Scanner;

class LeapYear
{
public static void main(String args[])
    {
        int n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the year");
        n = sc.nextInt();
        
        if (n % 100 !=0 && n % 4 == 0) 
        {
            System.out.println(n + " is a leap year");
        }
        else  
        {
            System.out.println(n + " is not a leap year");
        }
    }
}