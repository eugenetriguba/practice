/**
 * Warmup-1 > icyHot
 * Given two temperatures, return true if one is less than 0
 * and the other is greater than 100.
 */

public class icyHot
{
    public static void main(String[] args) 
    {
        System.out.println(icyHot(120, -1)); // true
        System.out.println(icyHot(-1, 120)); // true
        System.out.println(icyHot(2, 120));  // false
    }

    public static boolean icyHot(int temp1, int temp2) 
    {
        boolean case1 = temp1 < 0 && temp2 > 100;
        boolean case2 = temp1 > 100 && temp2 < 0;
        return case1 || case2;
    }
}