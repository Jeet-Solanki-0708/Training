package com.Hibernate;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class QueryStudents {

	public static void main(String[] args) {
		SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Student.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		session.beginTransaction();
		List<Student> students=session.createQuery("from Student").getResultList();
		displayStudents(students);
		students=session.createQuery("from Student s where s.firstName like 'U%'").getResultList();
		displayStudents(students);
		session.getTransaction().commit();
	}
	
	public static void displayStudents(List<Student> student) {
		for (Student student2 : student) {
			System.out.println(student2);
		}
	}

}
