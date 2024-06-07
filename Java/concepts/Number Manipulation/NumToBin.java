// ip num op binary
/* 
64 32 16 8 4 2 1 
           1 0 0    = 4
         1 0 1  0 
    1   0  0  1 1  1
    1  1  0 1  0  1

    */

import java.util.Scanner ;
public class NumToBin {
  public static void main(String[]args){
    int num ,rmd ;
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the number");
    num = sc.nextInt();
    String op = "";
    int i = num ;
    while(i != 0) {
      rmd = i % 2 ;
      i = i/2 ;
      op = rmd + op ;  
      }
    System.out.println(op);                                                                                    
sc.close();
  }
}