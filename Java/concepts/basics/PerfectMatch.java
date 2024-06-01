import java.util.Scanner;
public class PerfectMatch {
    public static void main (String[]args){
        String word , EvenWord ="",OddWord="";
        System.out.println("Enter a word");
        Scanner sc = new Scanner (System.in);
        word = sc.nextLine();

        for (int i = 0 ; i< word.length() ; i++ ){

            char ch = word.charAt(i);
            if (i % 2 == 0){
                EvenWord =  EvenWord + ch ;
                
            }
            else {
                OddWord = OddWord + ch;
                
            }
        }
        System.out.println ( EvenWord + " EvenWord");
        System.out.println ( OddWord + " OddWord");
        if (EvenWord.equals(OddWord) ){
            System.out.println ( word +" is a perfect word");
        }
        else {
            System.out.println ( word +" is not a perfect word") ;

        }
    }
}
