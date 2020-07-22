package com.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/home")
public class HomeController {

	@RequestMapping("/showForm")
	public String showMyPage() {
		return "main-menu";
	}
	
//	@RequestMapping("/processForm")
//	public String display(HttpServletRequest request,Model model) {
//		String name=request.getParameter("Name");
//		model.addAttribute("name", name);
//		return "display";
//	}

	@RequestMapping("/processForm")
	public String display(@RequestParam String Name,Model model) {
		model.addAttribute("name", Name);
		return "display";
	}

}
