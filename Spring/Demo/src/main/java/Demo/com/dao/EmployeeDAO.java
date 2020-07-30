package Demo.com.dao;

import java.util.List;

import Demo.com.bean.Employee;

public interface EmployeeDAO {

	public List<Employee> findAll();
	
	public Employee findById(int id);
	
	public void save(Employee employee);
	
	public void deleteById(int id);
}
