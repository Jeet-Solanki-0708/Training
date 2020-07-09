<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<c:set var="city" value="Mel"></c:set>
	<c:out value="${city}">No city</c:out>
	<set var="my" value="100"></set>
	<c:if test="${my%5==0}">
		<c:out value="Divisible by 5"></c:out>
	</c:if>
	<c:forEach var="i" begin="1" end="5" step="1">
		<c:out value="${i }"></c:out>	
	</c:forEach>
	<c:choose>
		<c:when test="${city=='Ahmedabad' }">
			Ahmedabad Selected		
		</c:when>
		<c:when test="${city=='Melborne' }">
			Melborne Selected		
		</c:when>
		<c:otherwise>
			None
		</c:otherwise>
	</c:choose>
</body>
</html>