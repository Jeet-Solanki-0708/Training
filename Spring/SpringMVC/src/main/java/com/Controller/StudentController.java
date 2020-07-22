package com.Controller;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.bean.Student;

@Controller
public class StudentController {
	
	@RequestMapping("/")
	public String showMyPage(Model model) {
		Student student=new Student();
		model.addAttribute("student",student);
		return "studentForm";
	}

	@RequestMapping("/processForm")
	public String display(@ModelAttribute("student") Student student) {
		System.out.println(student.getFirstName());
		System.out.println(student.getLastName());
		return "display";
	}

}
