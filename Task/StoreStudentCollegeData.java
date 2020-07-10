package Basic;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class StoreStudentCollegeData {
	void addCollegeStudentData(){
		Scanner readData=new Scanner(System.in);
		System.out.println("Enter College Name");
		String collegeName=readData.next();
		System.out.println("Enter Student Name");
		String studentName=readData.next();
		Connection connection=new ConnectionPoolObject().getConnectionObject();
		String insertData="insert into student(collegeName,studentName) values (?,?)";
		try {
			PreparedStatement insert=connection.prepareStatement(insertData);
			insert.setString(1, collegeName);
			insert.setString(2, studentName);
			insert.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		readData.close();
	}
	
	void displayCollegeStudents(){
		Map<String,List<String>> listCollegeStudent=new HashMap<String, List<String>>();
		Connection connection=new ConnectionPoolObject().getConnectionObject();
		String insertData="select collegeName,studentName from Student";
		try {
			PreparedStatement display=connection.prepareStatement(insertData);
			ResultSet rs=display.executeQuery();
			while(rs.next())
			{
				String college=rs.getString(1);
				String student=rs.getString(2);
				List<String> addStudent;
				if(listCollegeStudent.containsKey(college))
				{
					addStudent=listCollegeStudent.get(college);
					addStudent.add(student);
					listCollegeStudent.put(college, addStudent);
				}
				else
				{
					addStudent=new ArrayList<>();
					addStudent.add(student);
					listCollegeStudent.put(college, addStudent);
				}
			}
			System.out.println("Displaying Collge : Students");
			for(Map.Entry<String, List<String>> iterate : listCollegeStudent.entrySet()) {
				String collegeName=iterate.getKey();
				List<String> studentName=iterate.getValue();
				System.out.println();
				System.out.print(collegeName+" : ");
				for(String s:studentName) {
					System.out.print(s+" ");
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
