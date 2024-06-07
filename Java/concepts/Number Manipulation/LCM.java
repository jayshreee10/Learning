
// Java Program to Find LCM of Two Numbers
// LCM(u, v) = (u x v) / GCD(u, v)

import java.util.Scanner ;
public class LCM {
public static void main (String[]args){
Scanner sc = new Scanner ( System.in);
int num1,num2;
System.out.println("Enter num1");
num1 = sc.nextInt();
System.out.println("Enter num2");
num2 = sc.nextInt();

int mul = num1*num2 ;

while (num2 != 0){
    int i = num2 ;
    num2 = num1 % i;
    num1 = i ;
}
int hcf= num1 ;

int LCM = mul / hcf ;

System.out.println(LCM + " LCM");
sc.close();
}

}