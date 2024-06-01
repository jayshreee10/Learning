import java.util.Scanner; 

public class Palindrome {
    public static void main (String []args){
        String word,newWord = "" ;
        System.out.println ("Enter a word");
        Scanner sc = new Scanner (System.in);
        word = sc.nextLine() ;
        for (int i = word.length ()-1 ; i>=0 ; i--){
            char ch = word.charAt(i);
            newWord = newWord + ch ;
        }
        if (newWord.equals(word)){
            System.out.println(word + " is a palindrome word");
        }
        else {
            System.out.println(word + "is not a palindrome word");

        }
    }
}
