<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	User:<security:authentication property="principal.username"/><br><br>
	Roles:<security:authentication property="principal.authorities"/><br><br>

	<security:authorize access="hasRole('MANAGER')">

	<a href="${pageContext.request.contextPath }/leaders">Leaders Meet</a><br>
	
	</security:authorize>
	
	<security:authorize access="hasRole('ADMIN')">
	<a href="${pageContext.request.contextPath }/systems">Admins Meet</a><br>
	</security:authorize>
	Welcome 
	<form:form action="${pageContext.request.contextPath }/logout" method="POST">
	
		<input type="submit" value="logout"/> 
	
	</form:form>
</body>
</html>