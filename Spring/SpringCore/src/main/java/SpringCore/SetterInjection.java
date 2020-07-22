package SpringCore;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SetterInjection {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("/SpringCore/applicationContext.xml");
		CricketCoach coach=(CricketCoach)context.getBean("myCricketCoach");
		System.out.println(coach.getDailyFortune());
		System.out.println(coach.getDailyWorkout());
		System.out.println(coach.getName());
		context.close(); 
	}
}
