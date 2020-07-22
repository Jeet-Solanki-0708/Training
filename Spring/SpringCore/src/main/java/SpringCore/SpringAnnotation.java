package SpringCore;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringAnnotation {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("/SpringCore/applicationContext.xml");
		Coach coach=(Coach)context.getBean("hockeyCoach");
		System.out.println(coach.getDailyFortune());
		System.out.println(coach.getDailyWorkout());
	}
}
