package Demo.com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Demo.com.bean.Employee;


@Repository
public class EmployeeDAOJPAImpl implements EmployeeDAO{

	private EntityManager entityManager;
	
	@Autowired
	public EmployeeDAOJPAImpl(EntityManager entityManager) {
		this.entityManager=entityManager;
	}
	
	@Override
	public List<Employee> findAll() {
		//Session session=entityManager.unwrap(Session.class);
		Query query=entityManager.createQuery("from Employee");
		List<Employee> list=query.getResultList();
		return list;
	}

	@Override
	public Employee findById(int id) {
		Employee employee=entityManager.find(Employee.class,id);
		return employee;
	}

	@Override
	public void save(Employee employee) {
		//save or update the employee
		Employee employee2=entityManager.merge(employee);
		
		// update with id from db .. so we can get generated id for save/insert
		employee.setId(employee2.getId());
	}

	@Override
	public void deleteById(int id) {
		Query query=entityManager.createNamedQuery("delete from Employee where id=:employeeId");
		query.setParameter("employeeId", id);
		query.executeUpdate();
	}

}
