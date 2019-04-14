/**
 * Warmup-1 > startHi
 * Given a string, return true if the string starts with 
 * "hi" and false otherwise.
 */

public class startHi
{
    public static void main(String[] args) 
    {
        System.out.println(startHi("hi there")); // true
        System.out.println(startHi("hi"));       // true
        System.out.println(startHi("hello hi")); // false
    }

    public static boolean startHi(String str) 
    {
      if (str.length() < 2) return false;
      String firstTwo = str.substring(0, 2);
      return firstTwo.equals("hi");
    }
}