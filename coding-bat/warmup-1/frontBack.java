/**
 * Warmup-1 > frontBack
 * Given a string, return a new string where the first and last 
 * chars have been exchanged.
 */

public class frontBack
{
    public static void main(String[] args) 
    {
        System.out.println(frontBack("code")); // "eodc"
        System.out.println(frontBack("a"));    // "a"
        System.out.println(frontBack("ab"));   // "ba"
    }

    public static String frontBack(String str) 
    {
        if (str.length() < 2)
            return str;
        
        char[] c = str.toCharArray();
        char firstChar = c[0];
        c[0] = c[c.length - 1];
        c[c.length - 1] = firstChar;
        
        return new String(c);
    }
}