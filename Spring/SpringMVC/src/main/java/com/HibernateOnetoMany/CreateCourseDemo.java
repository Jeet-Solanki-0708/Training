package com.HibernateOnetoMany;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CreateCourseDemo {

	public static void main(String[] args) {
SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Instructor.class).addAnnotatedClass(InstructorDetail.class).addAnnotatedClass(Course.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		session.beginTransaction();
		
		Instructor instructor=session.get(Instructor.class, 1);
		
		Course course1=new Course("MySQL");
		Course course2=new Course("The Pinball");
		
		instructor.add(course1);
		instructor.add(course2);
		
		session.save(course1);
		session.save(course2);
		
		session.getTransaction().commit();
	}
	
}
