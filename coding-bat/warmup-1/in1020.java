/**
 * Warmup-1 > in1020
 * Given 2 int values, return true if either of them is in 
 * the range 10..20 inclusive.
 */

public class in1020
{
    public static void main(String[] args) 
    {
        System.out.println(in1020(12, 99)); // true
        System.out.println(in1020(21, 12)); // true
        System.out.println(in1020(8, 99));  // false
    }

    public boolean in1020(int a, int b) 
    {
      return a <= 20 && a >= 10 || b <= 20 && b >= 10;
    }    
}