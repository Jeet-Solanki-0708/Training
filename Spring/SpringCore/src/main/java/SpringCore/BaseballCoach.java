package SpringCore;

public class BaseballCoach implements Coach{

	private FortuneService fortuneService;
	
	public BaseballCoach(FortuneService thefortuneService) {
		this.fortuneService=thefortuneService;
	}
	
	public String getDailyWorkout() {
		// TODO Auto-generated method stub
		return "Run 10km";
	}

	@Override
	public String getDailyFortune() {
		// TODO Auto-generated method stub
		return (fortuneService).getFortune();
	}

}
