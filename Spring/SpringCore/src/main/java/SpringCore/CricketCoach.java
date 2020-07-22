package SpringCore;

public class CricketCoach implements Coach{
	private FortuneService fortuneService;
	private String name;
	public void initMethod(){
		System.out.println("In init method");
	}
	
	public void destroyMethod(){
		System.out.println("In destroy method");
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public CricketCoach() {
		System.out.println("now Args");
	}
	
	public FortuneService getFortuneService() {
		return fortuneService;
	}

	public void setFortuneService(FortuneService fortuneService) {
		this.fortuneService = fortuneService;
	}

	@Override
	public String getDailyWorkout() {
		// TODO Auto-generated method stub
		return "Practice";
	}

	@Override
	public String getDailyFortune() {
		// TODO Auto-generated method stub
		return fortuneService.getFortune();
	}
}
