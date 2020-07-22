package SpringAnnotation;

public class SwimCoach implements Coach{

	private FortuneService fortuneService;
	
	public SwimCoach(FortuneService fortuneService) {
		// TODO Auto-generated constructor stub
		this.fortuneService=fortuneService;
	}
	
	@Override
	public String getDailyWorkout() {
		// TODO Auto-generated method stub
		return "Swim";
	}

	@Override
	public String getDailyFortune() {
		// TODO Auto-generated method stub
		return fortuneService.getFortune();
	}

}
