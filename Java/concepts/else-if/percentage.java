import java.util.Scanner;

class Percentage
{
    
    public static void main(String[] args)
     {
        double a, b, c, d, e, f, percentage;
        Scanner sc = new Scanner (System.in);
        System.out.println("Enter your marks");
        a = sc.nextDouble();
        b = sc.nextDouble();
        c = sc.nextDouble();
        d = sc.nextDouble();
        e = sc.nextDouble();
        f = sc.nextDouble();

        if (a>100 || b>100 || c>100 || d>100 || e>100 || f>100 || a<0 || b<0  || c<0  || d<0  || e<0  || f<0) 
        
        {

        System .out.println("Enter valid mark details") ;

        }
        else 
        {
            percentage = (( a + b + c + d + e + f )/ 600) * 100 ;

            if (percentage < 25 ) 
            {
                System.out.println("You have failed");
            }

            else if (percentage>=25 && percentage<45 ) 
            {
                System.out.println("Your grade is E");
            }

            else if (percentage >=45 && percentage<50 ) 
            {
                System.out.println("Your grade is D");
            }
            else if (percentage >=50 && percentage<60 ) 
            {
                System.out.println("Your grade is C");
            }
            else if (percentage >=60 && percentage<80 ) 
            {
                System.out.println("Your grade is B");
            }
            else if (percentage >=80 && percentage<=100 ) 
            {
                System.out.println("Your grade is A");
            }
            else 
            {
                System.out.println("Invalid mark details"); 
            }
        }
     }
}