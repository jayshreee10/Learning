import java.util.Scanner;

class user
{
    public static void main(String[] args) 
    {
    int i ;
    String s;
    float f ;
    double d;
    boolean b ;
    char c ;
    Scanner sc = new Scanner(System.in);
    System.out.println("enter a number");  
    i = sc.nextInt();
    sc.nextLine();
    // enter was taken as an string input and nextline get skkipped 
    //sc.nextLine();took the value and jumped to nextline
    System.out.println(i + " is an integer value");
    System.out.println("enter a name");
    s=sc.nextLine();
    System.out.println(s + " is a string value");
    System.out.println("enter a decimal numer");
    f=sc.nextFloat();
    System.out.println(f + " is a float value");
    System.out.println("enter  t or f ");
    b=sc.nextBoolean();
    System.out.println(b + " is a boolean value");
    System.out.println("enter a symbol");
    c = sc.next().charAt(0);             
     //special case
     //sc.nextchar is undefined instead of sc.nextchar ,sc.next().charAt(0); is used 
    System.out.println(c + " is a character value");
    System.out.println("enter a big number");
    d=sc.nextDouble();
    System.out.println(d+ " is a double value");
    }
    
}