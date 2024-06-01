public class reverse {
    public static void main (String [] args){
        String name , newName = "" ;
        name = "Boy" ;
        for ( int i = name.length()-1;i>=0 ;i--)
    {
        //    System.out.println()
        char ch = name.charAt(i);
        newName = newName + ch ;
    }
    System.out.println(newName);

    }

}

