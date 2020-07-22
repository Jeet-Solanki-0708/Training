package SpringCore;

import org.springframework.context.support.ClassPathXmlApplicationContext;


/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
      ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("/SpringCore/applicationContext.xml");
      Coach theCoach=(Coach)context.getBean("myCoach");
      System.out.println(theCoach.getDailyWorkout());
      System.out.println(theCoach.getDailyFortune());
      context.close();
    }
}
