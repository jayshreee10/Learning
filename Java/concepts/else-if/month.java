import java.util.Scanner;

class Month
{
    public static void main(String args[])
    {
            int n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the month number ");
        n = sc.nextInt();
        if (n==1) 
        {
        System.out.println(" january is "+ n +"st month");    
        }
        else if (n==2)
        {  
        System.out.println( n+"nd month"+" february ");   
        }

        else if (n==3)
        {  
        System.out.println(n +"rd month"+" march ");
        }

        else if (n==4)
        { 
        System.out.println(n+"th month" +" April ");
        }
        else if (n==5)
        { 
        System.out.println(n+"th month" +" May ");
        }
        else if (n==6)
        { 
        System.out.println(n +"th month"+" June ");
        }
        else if (n==7)
        { 
        System.out.println(n +"th month"+" July ");
        }
        else if (n==8)
        { 
        System.out.println(n +"th month"+" August ");
        }
        else if (n==9)
        { 
        System.out.println(n +"th month"+" Septmber");
        }
        else if (n==10)
        { 
        System.out.println(n +"th month"+" October");
        }
        else if (n==11)
        { 
        System.out.println(n +"th month"+" November");
        }
        else if (n==12)
        { 
        System.out.println(n +"th month"+"December");
        }
        else 
        {
            System.out.println("This is not a valid month number");
        }
           
        
    }
}
