package com.Hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CreateStudentDemo {

	public static void main(String[] args) {
		SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Student.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		
		Student student1=new Student("Dhairya","Shsh","urpatel678@gmail.com");
		
		session.beginTransaction();
		session.save(student1);
		session.getTransaction().commit();
		
		session=factory.getCurrentSession();
		session.beginTransaction();
		Student student=session.get(Student.class, student1.getId());
		System.out.println(student);
		session.getTransaction().commit();
	}

}
