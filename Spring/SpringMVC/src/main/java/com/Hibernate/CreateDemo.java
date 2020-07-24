package com.Hibernate;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CreateDemo {

	public static void main(String[] args) {
SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Instructor.class).addAnnotatedClass(InstructorDetail.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		Instructor instructor=new Instructor("Dhairya","Sahh","shahdhairya678");
		InstructorDetail instructorDetail=new InstructorDetail("youtube.com","Code");
		
		instructor.setInstructorDetail(instructorDetail);
		session.beginTransaction();
		session.save(instructor);
		session.getTransaction().commit();
		
		session=factory.getCurrentSession();
		session.beginTransaction();
		Instructor instructor2=session.get(Instructor.class, 1);
		session.delete(instructor2);
		session.getTransaction().commit();
	}

}
