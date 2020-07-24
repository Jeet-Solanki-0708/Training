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
		<form:form action="processForm" modelAttribute="customer">
		
			FirstName:<form:input type="text" path="firstName"/><br>
			
			LastName:<form:input type="text" path="lastName"/>
			<form:errors path="lastName" /><br>
		
			FreePasses:<form:input type="text" path="freepass"/>
			<form:errors path="freepass"/><br>
			
			PostalCode:<form:input type="text" path="postalCode"/>
			<form:errors path="postalCode"/><br>
		
			CourseCode:<form:input type="text" path="courseCode"/>
			<form:errors path="courseCode"/><br>
		
			<input type="submit" value="Submit Here">
		
		</form:form>
</body>
</html>