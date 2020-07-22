package SpringAnnotation;

import org.springframework.stereotype.Component;

@Component
public class SecondFortuneService implements FortuneService{

	@Override
	public String getFortune() {
		// TODO Auto-generated method stub
		return "Second Fortune Service";
	}

}
