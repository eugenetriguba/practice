/**
 * Warmup-1 > posNeg
 * Given 2 int values, return true if one is negative and one 
 * is positive. Except if the parameter "negative" is true, 
 * then return true only if both are negative.
 */

public class posNeg
{
    public static void main(String[] args) 
    {
        System.out.println(posNeg(1, -1, false)); // true
        System.out.println(posNeg(-1, 1, false)); // true
        System.out.println(posNeg(-4, -5, true)); // true
    }

    public static boolean posNeg(int a, int b, boolean negative) 
    {
        if (negative) return a < 0 && b < 0;
        else return (a > 0 && b < 0) || (a < 0 && b > 0);
    }
}