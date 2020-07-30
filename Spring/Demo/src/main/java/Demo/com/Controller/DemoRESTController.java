package Demo.com.Controller;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoRESTController {

	@Value("${coach.name}")
	private String coachName;
	
	@Value("${team.name}")
	private String teamName;
	
	@GetMapping("/teaminfo")
	public String teamInfo() {
		return coachName+" "+teamName;
	}
	
	@GetMapping("/")
	public String sayHello() {
		return "Hello to BOOt"+LocalDateTime.now();
	}
	
	@GetMapping("/workout")
	public String sayWorkout() {
		return "2 hrs a day";
	}
	
	@GetMapping("/fortune")
	public String sayFortune() {
		return "good";
	}
	
}
