package com.annotation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class CourseCodeConstraintValidator implements ConstraintValidator<CourseCode, String>{

	String coursePrefix;
	
	public void initialize(CourseCode courseCode) {
		coursePrefix=courseCode.value();
	}
	
	public boolean isValid(String theCode, ConstraintValidatorContext theConstraintValidatorContext) {
		boolean result;
		if(theCode!=null)
			result=theCode.startsWith(coursePrefix);
		else
			result=true;
		return result;
	}

}
