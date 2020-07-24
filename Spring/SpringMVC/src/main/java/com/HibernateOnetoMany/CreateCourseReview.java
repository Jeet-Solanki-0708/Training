package com.HibernateOnetoMany;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CreateCourseReview {

	public static void main(String[] args) {
SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Instructor.class).addAnnotatedClass(InstructorDetail.class).addAnnotatedClass(Course.class).addAnnotatedClass(Review.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		session.beginTransaction();
		
		Course course=new Course("Pacman");
		
		course.addReview(new Review("Great"));
		course.addReview(new Review("Cool"));
		course.addReview(new Review("Bad"));
		
		session.save(course);
		
		session.getTransaction().commit();
	}
	
}
