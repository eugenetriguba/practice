/**
 * Warmup-1 > parrotTrouble
 * We have a loud talking parrot. The "hour" parameter is the 
 * current hour time in the range 0..23. We are in trouble if 
 * the parrot is talking and the hour is before 7 or after 20. 
 * Return true if we are in trouble.
 */

public class parrotTrouble 
{
    public static void main(String[] args)
    {
        System.out.println(parrotTrouble(true, 6));  // true
        System.out.println(parrotTrouble(true, 7));  // false
        System.out.println(parrotTrouble(false, 6)); // false
    }

    public static boolean parrotTrouble(boolean talking, int hour) 
    {
        return hour < 7 && talking || hour > 20 && talking;
    }
}