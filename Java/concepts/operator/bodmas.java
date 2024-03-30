import java.util.Scanner ;

class Bodmas
{
    public static void main (String args[])
    {
        int a,b,c,d,e,f ;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the first value ");
        a=sc.nextInt();
        System.out.print("Enter the second value ");
        b=sc.nextInt();
        c=a+b;
        d=a-b;
        e=a*b;
        f=a/b;
        System.out.println(" the addition value is " + c);
        System.out.println(" the subtaction value is " + d);
        System.out.println(" the multiplication value is " + e);
        System.out.println(" the division value is " + f);
}
}