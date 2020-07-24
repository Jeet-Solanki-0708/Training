package com.HibernateOnetoMany;

import javax.management.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class EagerLazy {
	public static void main(String[] args) {
SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Instructor.class).addAnnotatedClass(InstructorDetail.class).addAnnotatedClass(Course.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		session.beginTransaction();
		
//		Instructor instructor=session.get(Instructor.class, 1);
//		System.out.println("Instructor "+instructor);
//		
//		System.out.println("Courses "+instructor.getCourses());
		
		org.hibernate.query.Query<Instructor> query=session.createQuery("select i from Instructor i "+ " JOIN FETCH i.courses "+" where i.id=:theInstructorId",Instructor.class);
		query.setParameter("theInstructorId", 1);
		Instructor instructor=query.getSingleResult();
		
		System.out.println(instructor);
		session.getTransaction().commit();
		session.close();
		System.out.println(instructor.getCourses());

	}
}
