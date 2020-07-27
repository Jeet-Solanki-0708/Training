package com.Controller;

import java.util.List;

import javax.persistence.metamodel.Metamodel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.bean.Customer;
import com.dao.CustomerDAO;
import com.service.CustomerService;

@Controller
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@RequestMapping("/list")
	public String listCustomers(Model model) {
		List<Customer> customers=customerService.getCustomers();
		model.addAttribute("customers", customers);
		return "listCustomers";
	}
	
	@GetMapping("/addCustomer")
	public String addCustomer(Model model) {
		
		Customer customer=new Customer();
		model.addAttribute("customer",customer);	
		return "addCustomer";
	}
	
	@PostMapping("/saveCustomer")
	public String saveCustomer(@ModelAttribute("customer") Customer customer) {
		customerService.saveCustomer(customer);
		return "redirect:/customer/list";
	}
	
	@GetMapping("/updateForm")
	public String updateForm(@RequestParam("customerId") int id,Model model) {
		Customer customer=customerService.getCustomer(id);
		model.addAttribute("customer",customer);
		return "addCustomer";
	}
	
	@GetMapping("/delete")
	public String delete(@RequestParam("customerId") int id,Model model) {
		customerService.deleteCustomer(id);
		return "redirect:/customer/list";
	}
	
	@GetMapping("/search")
    public String searchCustomers(@RequestParam("theSearchName") String theSearchName,
                                    Model theModel) {

        // search customers from the service
        List<Customer> customers = customerService.searchCustomers(theSearchName);
                
        // add the customers to the model
        theModel.addAttribute("customers", customers);

        return "listCustomers";        
    }
}
