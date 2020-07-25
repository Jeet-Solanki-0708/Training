package com.HibernateManyToMany;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class CreateCourseStudent {

	public static void main(String[] args) {
SessionFactory factory=new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Instructor.class).addAnnotatedClass(InstructorDetail.class).addAnnotatedClass(Course.class).addAnnotatedClass(Review.class).addAnnotatedClass(Student.class).buildSessionFactory();
		
		Session session=factory.getCurrentSession();
		session.beginTransaction();
		Course course=new Course("Pacman");
		session.save(course);
		
		Student student1=new Student("Dhairya", "Shah", "shahdhairya678");
		Student student2=new Student("Umang", "Patel", "urpatel");
		course.addStudent(student1);
		course.addStudent(student2);
		session.save(student1);
		session.save(student2);
		
		session.getTransaction().commit();
	}
	
}
