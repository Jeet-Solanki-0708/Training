package com.Controller;

import java.io.File;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;


public class Driver {

	public static void main(String[] args) {
		
		try {
			// create object mapper
			ObjectMapper mapper = new ObjectMapper();
			
			// read JSON  file and map/convert to Java POJO: 
			
			Student student = mapper.readValue(
						new File("data/sample-full.json"), Student.class);
			
			System.out.println("First name = " + student.getFirstName());
			System.out.println("Last name = " + student.getLastName());
			
			Address address=student.getAddress();
			System.out.println(address.getCity());
			
			for(String val:student.getLanguages()) {
				System.out.println(val);
			}

		}
		catch (Exception exc) {
			exc.printStackTrace();
		}
	}
}




