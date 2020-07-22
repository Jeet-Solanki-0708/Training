<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<form:form action="processForm" modelAttribute="student">
		
			FirstName:<form:input type="text" path="firstName"/><br>
			
			LastName:<form:input type="text" path="lastName"/><br>
			
			Country:<form:select path="country">
					
					<form:options items="${student.countryOptions}"/>
					
				</form:select>
			Favourite Language:
			
			Java <form:radiobutton path="favouriteLanguage" value="Java"/> 
			C++  <form:radiobutton path="favouriteLanguage" value="C++"/> 
			Ruby <form:radiobutton path="favouriteLanguage" value="Ruby"/> 
			
			OPerating Systems:
			Linux:<form:checkbox path="operatingSystems" value="Linux"/>
			Windows	  <form:checkbox path="operatingSystems" value="Windows"/>
			Mac	  <form:checkbox path="operatingSystems" value="Mac"/>
			<input type="submit" value="Submit Here">
		
		</form:form>
</body>
</html>