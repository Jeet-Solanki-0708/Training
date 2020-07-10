package Basic;

import java.util.*;

public class CollegeInformation {
	private Map<String,List<String>> listCollegeStudent; //key will have College name Value will have list of student in it
	
	public CollegeInformation() {
		listCollegeStudent=new HashMap<String, List<String>>();
	}
	
	private void staticDataCollege() {
		ArrayList<String> gecStudents=new ArrayList<>();
		gecStudents.add("Dhairya");
		gecStudents.add("Umang");
		gecStudents.add("Jeet");
		listCollegeStudent.put("GEC", gecStudents);
		ArrayList<String> vgecStudents=new ArrayList<>();
		vgecStudents.add("Dhrumil");
		vgecStudents.add("Nishant");
		vgecStudents.addAll(gecStudents);
		vgecStudents.addAll(gecStudents);
		listCollegeStudent.put("VGEC", vgecStudents);
		ArrayList<String> ldStudents=new ArrayList<>();
		ldStudents.add("Sarang");
		ldStudents.add("Nishant");
		ldStudents.add("Sarang");
		listCollegeStudent.put("LD", ldStudents);
	}
	
	private void getCollegeStudentCount() {
		for(Map.Entry<String, List<String>> iterate : listCollegeStudent.entrySet()) {
			String collegeName=iterate.getKey();
			List<String> studentName=iterate.getValue();
			System.out.println(collegeName+" : "+studentName.size());
		}
	}
	
	private void getCollegeStudentName() {
		for(Map.Entry<String, List<String>> iterate : listCollegeStudent.entrySet()) {
			String collegeName=iterate.getKey();
			List<String> studentName=iterate.getValue();
			System.out.println();
			System.out.print(collegeName+" : ");
			for(String s:studentName) {
				System.out.print(s+" ");
			}
		}
		System.out.println();
	}
	
	private void getCollegeStudentUniqueName() {
		for(Map.Entry<String, List<String>> iterate : listCollegeStudent.entrySet()) {
			String collegeName=iterate.getKey();
			List<String> studentName=iterate.getValue();
			HashSet<String> unquieStudentName=new HashSet<>();
			unquieStudentName.addAll(studentName);
			System.out.println();
			System.out.print(collegeName+" : ");
			for(String s:unquieStudentName) {
				System.out.print(s+" ");
			}
		}
	}
	
	public static void main(String[] args) {
		CollegeInformation classObject=new CollegeInformation();
		classObject.staticDataCollege();
		//System.out.println(classObject.listCollegeStudent);
		classObject.getCollegeStudentCount();
		classObject.getCollegeStudentName();
		classObject.getCollegeStudentUniqueName();
		StoreStudentCollegeData addData=new StoreStudentCollegeData();
		//addData.addCollegeStudentData();                 //adding data to database
		addData.displayCollegeStudents();       // Displaying from database
	}
}
