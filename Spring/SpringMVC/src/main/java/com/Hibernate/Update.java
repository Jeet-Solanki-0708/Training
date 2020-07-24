package com.Hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Update {

	public static void main(String[] args) {
		SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Student.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		session.beginTransaction();
		Student student=session.get(Student.class, 1);
		student.setFirstName("Jeet");
		session.getTransaction().commit();
		
		session=factory.getCurrentSession();
		session.beginTransaction();
		session.createQuery("update Student set email='jeetsolucky' where id=1").executeUpdate();
		session.getTransaction().commit();
		
	}

}
