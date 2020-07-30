package com.Configuration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@Controller
public class RESTController {

	@RequestMapping("/hello")
	String helloWorld() {
		return "Hello World";
	}
	
}
