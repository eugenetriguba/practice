/**
 * Warmup-1 > diff21
 * Given an int n, return the absolute difference between n 
 * and 21, except return double the absolute difference if n 
 * is over 21.
 */

public class diff21 
{
    public static void main(String[] args) 
    {
        System.out.println(diff21(19)); // 2
        System.out.println(diff21(10)); // 11
        System.out.println(diff21(21)); // 0
    }

    public static int diff21(int n) 
    {
        int difference = Math.abs(n - 21);
        if (n > 21) difference = difference * 2;
        return difference;
    }
}