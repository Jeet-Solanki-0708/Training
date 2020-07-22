package SpringAnnotation;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class JavaConfig {
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext(SportConfig.class);
		Coach coach=(Coach)context.getBean("swimCoach");
		System.out.println(coach.getDailyFortune());
		System.out.println(coach.getDailyWorkout());
		context.close();
	}
}
