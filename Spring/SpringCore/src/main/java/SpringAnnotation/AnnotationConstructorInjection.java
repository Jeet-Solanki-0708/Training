package SpringAnnotation;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AnnotationConstructorInjection {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("/SpringAnnotation/annotationApplicationContext.xml");
		Coach annotationTennisCoach=(Coach)context.getBean("annotationTennisCoach");
		Coach coach=(Coach)context.getBean("annotationTennisCoach");
		System.out.println(coach+" "+annotationTennisCoach);
		System.out.println(annotationTennisCoach.getDailyFortune());
		System.out.println(annotationTennisCoach.getDailyWorkout());
		context.close();
	}
}
