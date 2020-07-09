package com.dao; 

public class Employee {
	String name;
	private int salary;
	public Employee(int salary,String name) {
		// TODO Auto-generated constructor stub
		this.name=name;
		this.salary=salary;
	}
	public int getSalary()
	{
		return this.salary;
	}
}
