/**
 * Warmup-1 > backAround
 * Given a string, take the last char and return a new string 
 * with the last char added at the front and back, so "cat" 
 * yields "tcatt". The original string will be length 1 or more.
 */

public class backAround
{
    public static void main(String[] args) 
    {
        System.out.println(backAround("cat"));   // "tcatt"
        System.out.println(backAround("Hello")); // "oHelloo"
        System.out.println(backAround("a"));     // "aaa"
    }

    public static String backAround(String str) 
    {
        StringBuilder sb = new StringBuilder(str);
        char lastChar = str.charAt(str.length() - 1);

        sb.insert(0, lastChar);
        sb.insert(sb.length() - 1, lastChar);

        return sb.toString();
    }
}