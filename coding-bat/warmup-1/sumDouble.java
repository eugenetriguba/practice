/**
 * Warmup-1 > sumDouble
 * Given two int values, return their sum. Unless the two 
 * values are the same, then return double their sum.
 */

public class sumDouble 
{
    public static void main(String[] args) 
    {
        System.out.println(sumDouble(1, 2)); // 3
        System.out.println(sumDouble(3, 2)); // 5
        System.out.println(sumDouble(2, 2)); // 8
    }

    public static int sumDouble(int a, int b) 
    {
        return a == b ? (a + b) * 2 : a + b;
    }
}