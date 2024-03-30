import java.util.Scanner;
class Day 
{
    public static void main(String args[])
    {
        int day,month,year,january, february,march,april, may,june,july,august,septmber,october,november,december ;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the day");
        day = sc. nextInt();
        System.out.println("Enter the month");
        month = sc. nextInt();
        System.out.println("Enter the year");
        year = sc. nextInt();

        if (day <=0 || day >31 )
        {
        System.out.println("enter a valid date");
        }
        else if (month <=0 || month > 12)
        {
            System.out.println("enter a valid month");
        }

        else if (year < 0 )
        {
            System.out.println("enter a valid month");
        }
        else {
            january = day + 0;
            if (month ==1 )
            {
                System.out.println("Day number" + january);
            }
            february = january + 31;
            if (month == 2 )
            {
                System.out.println("Day number" + february);
            }
            march = february + 28;
            if (month == 3 )
            {
                System.out.println("Day number" + march);
            }
            april = march + 31;
            if (month == 4 )
            {
                System.out.println("Day number" + april);
            }
            may = april + 30;
            if (month == 5 )
            {
                System.out.println("Day number" + may);
            }
            june = may + 31;
            if (month == 6 )
            {
                System.out.println("Day number" + june);
            }
            july = june + 30;
            if (month == 7 )
            {
                System.out.println("Day number" + july);
            }
            august = july + 31;
            if (month == 8 )
            {
                System.out.println("Day number" + august);
            }
            septmber = august + 31;
            if (month == 9 )
            {
                System.out.println("Day number" + septmber);
            }
            october = septmber + 30;
            if (month == 10 )
            {
                System.out.println("Day number " + october);
            }
            november = october + 31;
            if (month == 11 )
            {
                System.out.println("Day number " + november);
            }
           december = november + 31;
            if (month == 12 )
            {
                System.out.println("Day number " + december);
            }
        }
    }
}
