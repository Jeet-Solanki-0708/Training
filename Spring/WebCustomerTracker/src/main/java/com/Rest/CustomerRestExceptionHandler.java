package com.Rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomerRestExceptionHandler {

	@ExceptionHandler
	public ResponseEntity<CustomerErrorResponse> handleException(CustomerNotFoundException ex){
		
		CustomerErrorResponse error=new CustomerErrorResponse(HttpStatus.NOT_FOUND.value(),ex.getMessage(),System.currentTimeMillis());
		return new ResponseEntity<CustomerErrorResponse>(error, HttpStatus.NOT_FOUND);
	}
	
}
