package com.HibernateBi;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.HibernateBi.*;

public class DeleteInstructor{

	public static void main(String[] args) {
		SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Instructor.class).addAnnotatedClass(InstructorDetail.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		
		
		session.beginTransaction();
		InstructorDetail instructorDetail=session.get(InstructorDetail.class,1);
		instructorDetail.getInstructor().setInstructorDetail(null);
		session.delete(instructorDetail);
		session.getTransaction().commit();
	}
}
