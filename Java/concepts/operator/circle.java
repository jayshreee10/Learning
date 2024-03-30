import java.util.Scanner;
class circle 
{
    public static void main(String args[])
    {
        double radius,area,perimetre;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the radius of circle");
        radius=sc.nextDouble();
    
        perimetre=2*1.31*radius;
        area = 1.314*radius*radius;
        System.out.println("perimetre of the circle is "+ perimetre);
        System.out.println("area of the circle is "+ area);
    }
}