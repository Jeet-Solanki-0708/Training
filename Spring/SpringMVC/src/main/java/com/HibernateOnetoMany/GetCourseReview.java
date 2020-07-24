package com.HibernateOnetoMany;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class GetCourseReview {
	public static void main(String[] args) {
		SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Instructor.class).addAnnotatedClass(InstructorDetail.class).addAnnotatedClass(Course.class).addAnnotatedClass(Review.class).buildSessionFactory();
				
				Session session=factory.getCurrentSession();
				session.beginTransaction();
				Course course=session.get(Course.class, 3);
				System.out.println(course);
				System.out.println(course.getReviews());
				//session.save(course);
				session.delete(course);
				
				
				session.getTransaction().commit();
			}
}
