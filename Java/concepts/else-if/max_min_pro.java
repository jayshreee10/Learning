
//ip 3no. findout max,min, odd no. even no.  for max-min

import java.util.Scanner;

 class MaxMin {
    public static void main(String[] args) 
    {
        int num1,num2,num3,max,min;
        Scanner sc = new Scanner (System.in);
        System.out.println("enter first number");
        num1=sc.nextInt();
        System.out.println("enter second number");
        num2=sc.nextInt();
        System.out.println("enter third number");
        num3=sc.nextInt();
        //maximum value
        if (num1>num2 && num1>num3 ) 
        max= num1;
        else if (num2>num1 && num2>num3) 
        max =num2;
        else 
        max=num3;

        //minimum value
        if (num1<num2 && num1<num3 ) 
        min =num1;
        else if (num2<num1 && num2<num3) 
        min =num2;
        else 
        min = num3;
        
        System.out.println("the greatest number is" + max);
        System.out.println("the greatest number is" + min);
   
        //odd-even
        if (max % 2 == 0)
        System.out.println(max + " is an even number");
        else 
        System.out.println(max + " is an odd number");
        
        if (min % 2 == 0)
        System.out.println(min + " is an even number");
        else 
        System.out.println(min + " is an odd number");
    }
}



