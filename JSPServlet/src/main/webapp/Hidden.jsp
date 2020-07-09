<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%String name="Dhairya"; 
String hidden=request.getParameter("age");%>
<%=hidden%>
		<form action="URLRewriting.jsp">
		Enter Name:<input type="text" name="fname"><br>
		<input type="hidden" name="age" value="<%=name%>"><br>
		Enter Last:<input type="text" name="lname"><br>
		
		<input type="submit" value="Submit"/>
	</form>
</body>
</html>