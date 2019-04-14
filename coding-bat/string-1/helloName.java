/**
 * Warmup-1 > helloName
 * Given a string name, e.g. "Bob", return a greeting of the 
 * form "Hello Bob!".
 */

public class helloName
{
    public static void main(String[] args) 
    {
        System.out.println(helloName("Bob"));   // "Hello Bob!"
        System.out.println(helloName("Alice")); // "Hello Alice!"
        System.out.println(helloName("X"));     // "Hello X!"
    }

    public static String helloName(String name) 
    {
      StringBuilder sb = new StringBuilder(name);
      sb.insert(0, "Hello ");
      sb.insert(sb.length(), "!");
      return sb.toString();
    }    
}