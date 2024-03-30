import java.util.Scanner;

class Money
{
    public static void main(String args[])
    {
        double money,paisa;
        Scanner sc = new Scanner (System.in);
        System.out.println("enter the money value");
        money = sc.nextDouble();

        paisa = money * 100;
        System.out.println("The expected paisa value is " + paisa);
    }
}