package Basic;

import java.util.Scanner;


class Employee
{
	String name;
	int salary;
	public Employee(int a,String b) {
		// TODO Auto-generated constructor stub
	}
	public Employee() {
		// TODO Auto-generated constructor stub
	}
	void read()
	{
		Employee e=new Employee();
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Nam:");
		name=sc.nextLine();
		salary=sc.nextInt();
	}
	void getData()
	{
		System.out.println(name+" "+salary);
	}
	int getSalary()
	{
		
		return salary;
	}
	
	int a(int c)
	{
		return c;
	}
	float a(float c)
	{
		return c;
	}
}

public class UsingObject {
	public static void main(String[] args) {
		Employee e3=new Employee(10, "abc");
		Employee e1=new Employee();
		Employee e2=new Employee();
		e1.read();
		e2.read();
		e1.a(10);
		e1.a(10.0f);
		e1.getData();
		e2.getData();
		System.out.println("Salaray is "+e1.getSalary());
		System.out.println("Salaray is "+e2.getSalary());
	}
}
