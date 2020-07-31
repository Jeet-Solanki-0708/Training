package Demo.com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Demo.com.bean.Employee;


@Repository
public class EmployeeDAOHibernateImpl implements EmployeeDAO{

	private EntityManager entityManager;
	
	@Autowired
	public EmployeeDAOHibernateImpl(EntityManager entityManager) {
		this.entityManager=entityManager;
	}
	
	@Override
	public List<Employee> findAll() {
		Session session=entityManager.unwrap(Session.class);
		Query<Employee> query=session.createQuery("from Employee",Employee.class);
		List<Employee> list=query.getResultList();
		return list;
	}

	@Override
	public Employee findById(int id) {
		Session session=entityManager.unwrap(Session.class);
		Employee employee=session.get(Employee.class, id);
		return employee;
	}

	@Override
	public void save(Employee employee) {
		Session session=entityManager.unwrap(Session.class);
		session.saveOrUpdate(employee);
		
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		Session session=entityManager.unwrap(Session.class);
		Employee employee=session.get(Employee.class, id);
//		Query<Employee> query=session.createQuery("from Employee where id=:employeeId");
//		query.setParameter("employeeId", id);
		session.delete(employee);
		//query.executeUpdate();
	}

}
