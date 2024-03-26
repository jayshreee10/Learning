// all odd numbers between 100

const value = function isOdd (number)
{
    for (i=0 ; i<= number;i++  )
    {
        // console.log ( i  )

    if (i%2 == 0 ){
        console.log (i + " even number")
     }
    else 
    {
        console.log (i + " odd number ")
    }
    }
}

value(10)