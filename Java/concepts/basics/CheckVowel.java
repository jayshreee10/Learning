public class CheckVowel {
    public static void main (String[]args){
        String word ;
        word = "Variable";
        for (int i=0;i< word.length();i++) 
        {
            char ch = word.charAt(i);
            if( ch == 'a'|| ch == 'e'||ch == 'i' || ch =='o' ||ch =='u'||ch =='A'||ch =='E'||ch =='I'||ch =='O'||ch =='U'){
                System.out.println(ch + " is vowel");
                
            }
            else {
                System.out.println(ch + " is consonant");
                
            }
            
        }
    }
}
