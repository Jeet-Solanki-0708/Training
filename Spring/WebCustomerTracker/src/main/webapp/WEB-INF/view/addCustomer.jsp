<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
		<form:form action="saveCustomer" modelAttribute="customer" method="POST">
		<form:hidden path="id"/>
		
			FirstName:<form:input path="firstName"/><br>
			LastName:<form:input path="lastName"/><br>
			email:<form:input path="email"/><br>
			<input type="submit" value="Save">
			
		</form:form>
		<br>
		<a href="${pageContext.request.contextPath}/customer/list">Back to List</a>
</body>
</html>