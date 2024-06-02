import java.util.Scanner;
public class IsASquare {
    public static void main ( String[]args){
    int length , bredth ;
    Scanner sc = new Scanner (System.in);
    System.out.println("Enter Length") ;
    length = sc.nextInt() ;
    System.out.println("Enter Bredth") ;
    bredth = sc.nextInt();
    if(length == bredth ){
        System.out.println("This is a Square");
    }
    else {

        System.out.println("This is not a Square");
    }

    }
}
