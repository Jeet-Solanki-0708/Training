package com.Controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.annotation.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bean.*;


@RestController
@RequestMapping("/api")
public class StudentRESTController {

	private List<Student1> list;
	
	@PostConstruct
	public void getData() {
		list=new ArrayList<Student1>();
		list.add(new Student1("Dhairya", "Shah"));
		list.add(new Student1("Jeet", "Solanki"));
		list.add(new Student1("Umang", "Patek"));
	}
	
	@RequestMapping("/list")
	public List<Student1> getList(){
		return list;
	}
	
	@RequestMapping("/list/{id}")
	public Student1 getList(@PathVariable int id){
		
		if(id>list.size() || id<0) {
			throw new StudentNotFoundException("Student id not found");
		}
		return list.get(id);
	}
	
//	@ExceptionHandler
//	public ResponseEntity<StudentErrorResponse> handleException(StudentNotFoundException e){
//		
//		StudentErrorResponse error=new StudentErrorResponse();
//		error.setStatus(HttpStatus.NOT_FOUND.value());
//		error.setMessage(e.getMessage());
//		error.setTimeStamp(System.currentTimeMillis());
//		return new ResponseEntity<StudentErrorResponse>(error, HttpStatus.NOT_FOUND);
//	}
//	
//	@ExceptionHandler
//	public ResponseEntity<StudentErrorResponse> handleException(Exception e){
//		
//		StudentErrorResponse error=new StudentErrorResponse();
//		error.setStatus(HttpStatus.BAD_REQUEST.value());
//		error.setMessage(e.getMessage());
//		error.setTimeStamp(System.currentTimeMillis());
//		return new ResponseEntity<StudentErrorResponse>(error, HttpStatus.BAD_REQUEST);
//	}
}
