// Java Program to Swap Two Numbers using 3rd variable
import java.util.Scanner ;
public class SwapWOV {
    public static void main(String []args){
        
        int FirstNum , SecondNum  ;

        Scanner sc = new Scanner (System.in);
        System.out.println("Enter first num");
        FirstNum = sc.nextInt() ;
        System.out.println("Enter second num");
        SecondNum = sc.nextInt();
        // first approach
        // FirstNum = (FirstNum + SecondNum) ; 
        // SecondNum = (FirstNum - SecondNum ) ;
        // FirstNum = (FirstNum -  SecondNum) ; 
        //  second approach
        FirstNum = (FirstNum * SecondNum) ; 
        SecondNum = (FirstNum / SecondNum ) ;
        FirstNum = (FirstNum / SecondNum) ; 
        
        System.out.println ( FirstNum + " " + SecondNum); 
        sc.close();
    }
}
