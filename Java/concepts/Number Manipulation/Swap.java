import java.util.Scanner ;
public class Swap {
    public static void main(String []args){
        
        // Java Program to Swap Two Numbers using 3rd variable
        int FirstNum , SecondNum , Swap ;

        Scanner sc = new Scanner (System.in);
        System.out.println("Enter first num");
        FirstNum = sc.nextInt() ;
        System.out.println("Enter second num");
        SecondNum = sc.nextInt();

        Swap = FirstNum ;
        FirstNum = SecondNum ;
        SecondNum = Swap ;

        System.out.println (FirstNum +","+ SecondNum ); 
        sc.close();
    }
}



