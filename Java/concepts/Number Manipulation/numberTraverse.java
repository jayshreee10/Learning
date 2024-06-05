import java.util.Scanner;

public class numberTraverse {
    public static void main (String[]args){
        Scanner sc = new Scanner (System.in);
        int num ,rmd;
        System.out.println("Enter the number");
        num = sc.nextInt();
       int i = num ;
        while (i != 0){
            rmd = i % 10 ;
            i = i / 10 ;
            System .out .println(rmd + " reminder after iteration");
        }
        sc.close();
    }
}
