<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

Custom:
		<form:form action="${pageContext.request.contextPath }/authenticateTheUser" method="POST">
		
		<c:if test="${param.error!=null }">
		
			Sorry Wrong username/password.
		
		</c:if>
		
		<c:if test="${param.logout!=null }">
		
			You have been logged out
		
		</c:if>
		
		UserName:<input type="text" name="username"/>
		
		Password:<input type="text" name="password"/>
		<input type="submit" value="Login"> 
		</form:form>
</body>
</html>