package Demo.com.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import Demo.com.bean.Employee;
import Demo.com.dao.EmployeeDAO;
import Demo.com.dao.EmployeeRepository;

public class EmployeeServiceJpaImpl implements EmployeeService{
	private EmployeeRepository employeeRepository;
	
	@Autowired
	public EmployeeServiceJpaImpl(EmployeeRepository employeeRepository) {
		this.employeeRepository=employeeRepository;
	}
	
	@Override
	// @Transactional No need as provided by JPA
	public List<Employee> findAll() {
		
		return employeeRepository.findAll();
	}

	@Override
	public Employee findById(int id) {
		Optional<Employee> result=employeeRepository.findById(id);
		Employee employee=null;
		if(result.isPresent()) {
			employee=result.get();
		}
		else {
			throw new RuntimeException("Did not find Employee");
		}
		return employee;
	}

	@Override
	public void save(Employee employee) {
		// TODO Auto-generated method stub
		employeeRepository.save(employee);
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		employeeRepository.deleteById(id);
	}

}
