package SpringCore;

import org.springframework.stereotype.Component;

@Component
public class HockeyCoach implements Coach{

	@Override
	public String getDailyWorkout() {
		// TODO Auto-generated method stub
		return "Play Hoackey";
	}

	@Override
	public String getDailyFortune() {
		// TODO Auto-generated method stub
		return "Work";
	}

}
