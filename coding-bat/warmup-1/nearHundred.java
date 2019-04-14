/**
 * Warmup-1 > nearHundred
 * Given an int n, return true if it is within 10 of 100 or 200.
 * Note: Math.abs(num) computes the absolute value of a number.
 */

public class nearHundred
{
    public static void main(String[] args) 
    {
        System.out.println(nearHundred(93)); // true
        System.out.println(nearHundred(90)); // true
        System.out.println(nearHundred(89)); // false
    }

    public static boolean nearHundred(int n) 
    {
        return n <= 110 && n >= 90 || n <= 210 && n >= 190;
    }
}