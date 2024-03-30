import java.util.Scanner ;

class Marks
{
    public static void main(String[] args)
    {
        int mark;
        Scanner sc = new Scanner (System.in);
        System.out.println("Enter your mark");
        mark = sc.nextInt();

        if (mark < 25 ) 
        {
            System.out.println("You have failed");
        }

        else if (mark >=25 && mark<45 ) 
        {
            System.out.println("Your grade is E");
        }

        else if (mark >=45 && mark<50 ) 
        {
            System.out.println("Your grade is D");
        }
        else if (mark >=50 && mark<60 ) 
        {
            System.out.println("Your grade is C");
        }
        else if (mark >=60 && mark<80 ) 
        {
            System.out.println("Your grade is B");
        }
        else if (mark >=80 && mark<=100 ) 
        {
            System.out.println("Your grade is A");
        }
        else 
        {
            System.out.println("This is not a valid mark"); 
        }
    }
}