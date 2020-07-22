package SpringAnnotation;

import org.springframework.stereotype.Component;

@Component
public class AnnotationHappyFortuneService implements FortuneService{

	@Override
	public String getFortune() {
		// TODO Auto-generated method stub
		return "Lucky Day";
	}
	
}
