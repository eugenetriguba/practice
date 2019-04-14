/**
 * Warmup-1 > front22
 * Given a string, take the first 2 chars and return the string 
 * with the 2 chars added at both the front and back, so "kitten" 
 * yields"kikittenki". If the string length is less than 2, use 
 * whatever chars are there.
 */

public class front22
{
    public static void main(String[] args) 
    {
        System.out.println(front22("kitten")); // "kikittenki"
        System.out.println(front22("Ha"));     // "HaHaHa"
        System.out.println(front22("abc"));    // "ababcab"
    }

    public static String front22(String str) 
    {
        StringBuilder sb = new StringBuilder(str);
        String front = str.length() >= 2 ? str.substring(0, 2) : str;
        
        sb.insert(0, front);
        sb.insert(sb.length(), front);
        
        return sb.toString();
    }
    
}