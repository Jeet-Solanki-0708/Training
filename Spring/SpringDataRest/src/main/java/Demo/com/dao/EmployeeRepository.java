package Demo.com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import Demo.com.bean.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

}
