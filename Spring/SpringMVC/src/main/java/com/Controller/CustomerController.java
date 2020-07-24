package com.Controller;

import javax.validation.Valid;

import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.bean.Customer;

@Controller
@RequestMapping("/customer")
public class CustomerController {

	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		StringTrimmerEditor stringTrimmerEditor=new StringTrimmerEditor(true);
		dataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
	}
	
	
	@RequestMapping("/")
	public String showForm(Model model) {
		model.addAttribute("customer",new Customer());
		return "CustomerForm";
	}
	
	@RequestMapping("/processForm")
	public String display(@Valid @ModelAttribute("customer") Customer customer,BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			return "CustomerForm";
		}
		return "confirmation";
	}
}
