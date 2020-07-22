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
			<form:errors path="lastName" />
		
		
			<input type="submit" value="Submit Here">
		
		</form:form>
</body>
</html>