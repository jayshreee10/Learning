// // Java Program to Check If a Number is Neon Number or Not
// A neon number is a number where the sum of digits of the square of the number is equal to the numbe
// square of 9=9*9=81;
// sum of digit of square : 8+1=9(which is equal to given number)
import java.util.Scanner ;
public class Neon {
    public static void main(String[]args){
    int num ;
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the number");
    num = sc.nextInt();

    int power,rmd=0,neon=0 ;
    power = num * num ;
    int i = power;
    while(i!= 0){
        rmd = i % 10;
        i = i/10 ;
        neon = neon + rmd ;
    }
    if ( neon == num){

        System.out.println(num  + " is a neon number " + " because sum of the digits is " + neon );
    }
    else{
        System.out.println(num  + " is not a neon number " + " because sum of the digits is " + neon);

    }
sc.close();
    }
}
