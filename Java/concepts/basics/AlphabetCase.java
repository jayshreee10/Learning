// Write a program to check whether a entered character is lowercase ( a to z ) or uppercase ( A to Z )
import java.util.Scanner ;
public class AlphabetCase {
    public static void main (String[]args){
    String word  ;
    System.out.println ("Enter the word");
    Scanner sc = new Scanner(System.in);
    word = sc.nextLine();
    for ( int i = 0 ; i < word.length() ; i++ ){
        char ch  =  word.charAt (i);
        if (ch >= 'A' && ch<= 'Z' ){
            System.out.println(ch + " is in uppercase ");
        }
        else if (ch >= 'a' && ch<= 'z'){
            System.out.println(ch + " is in lowercase ");
        }
        else {
            System.out.println(ch + " is not an alphabetic character ");
        }
    }
    sc.close();

    }

}
