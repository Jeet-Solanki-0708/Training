package com.HibernateOnetoMany;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CreateInstructorCourse {
	public static void main(String[] args) {
SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Instructor.class).addAnnotatedClass(InstructorDetail.class).addAnnotatedClass(Course.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		session.beginTransaction();
		
		Instructor instructor=session.get(Instructor.class, 1);
		
		System.out.println(instructor.getCourses());
		
		session.getTransaction().commit();

	}
}
