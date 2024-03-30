import java.util.Scanner;

class SimpleIntrest
{
    public static void main(String args[])
    {
        double simpleintrest,principle,time,rate ;
        Scanner sc = new Scanner (System.in);
        System.out.println("enter the principle value");
        principle = sc.nextDouble();
        System.out.println("enter the time period");
        time = sc.nextDouble();
        System.out.println("enter the rate amount");
        rate = sc.nextDouble();

        simpleintrest = (principle * time * rate )/100;
        System.out.println("Your Simple Intrest value is "+ simpleintrest  );

    }
}