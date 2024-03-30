//WAP to check the number odd-even

import java.util.Scanner ;
class Oddeven
{
public static void main(String a [])
{
int n ;
System.out.print(" Enter the number ");
Scanner number = new Scanner(System.in);
n=number.nextInt();
if (n%2==0) 
{
    
    System.out.println (n +" is a even number");
}
else
{
    System.out.println(n + " is a odd number");
}
}
}


