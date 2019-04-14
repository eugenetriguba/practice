/**
 * Warmup-1 > hasTeen
 * We'll say that a number is "teen" if it is in the range 13..19 
 * inclusive. Given 3 int values, return true if 1 or more of them 
 * are teen.
 */
import java.util.stream.IntStream;

public class hasTeen
{
    public static void main(String[] args) 
    {
        System.out.println(hasTeen(13, 20, 10)); // true
        System.out.println(hasTeen(20, 19, 10)); // true
        System.out.println(hasTeen(20, 10, 13)); // true
    }

    public static boolean hasTeen(int a, int b, int c) {
        boolean case1 = a >= 13 && a <= 19;
        boolean case2 = b >= 13 && b <= 19;
        boolean case3 = c >= 13 && c <= 19;
        return case1 || case2 || case3;
    }
}