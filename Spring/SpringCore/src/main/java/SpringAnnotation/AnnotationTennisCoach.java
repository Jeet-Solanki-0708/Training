package SpringAnnotation;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
public class AnnotationTennisCoach implements Coach{

	@Autowired
	@Qualifier("secondFortuneService")
	private FortuneService fortuneService;
/*	
 	//Constructor injection
	@Autowired
	public AnnotationTennisCoach(FortuneService fortuneService) {
		this.fortuneService=fortuneService;
	}
*/	
	
	@PostConstruct
	void initMethod()
	{
		System.out.println("In Init");
	}
	
	@PreDestroy
	void Destroy()
	{
		System.out.println("In Destroy");
	}
	
	@Override
	public String getDailyWorkout() {
		// TODO Auto-generated method stub
		return "Practie Tennis";
	}

//	public FortuneService getFortuneService() {
//		return fortuneService;
//	}

//	@Autowired
	//Setter Injection
//	public void setFortuneService(FortuneService fortuneService) {
//		this.fortuneService = fortuneService;
//		System.out.println("In setter Injection");
//	}

	@Override
	public String getDailyFortune() {
		// TODO Auto-generated method stub
		return fortuneService.getFortune();
	}

}
