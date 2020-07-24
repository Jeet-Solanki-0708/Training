package com.bean;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.lang.NonNull;

import com.annotation.CourseCode;

public class Customer {
	private String firstName;
	
	
	@Size(min = 2,message = "Size should be greater than 1")
	@NotNull(message = "is required")
	private String lastName;
	
	@NotNull(message = "is required")
	@Min(value=0,message = "Should be grater than 0")
	@Max(value=10,message="Should be less than 10")
	private Integer freepass;

	@Pattern(regexp = "[a-zA-Z0-9]{5}",message = "Should be of 5 characters only")
	private String postalCode;

	@CourseCode
	private String courseCode;
	public String getCourseCode() {
		return courseCode;
	}

	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}


	public Integer getFreepass() {
		return freepass;
	}

	public void setFreepass(Integer	 freepass) {
		this.freepass = freepass;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
