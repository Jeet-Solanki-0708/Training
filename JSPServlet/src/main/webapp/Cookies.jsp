<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<%
		Cookie c1=new Cookie("city1","NewYork");
		Cookie c2=new Cookie("city2","Ahmedavad");
		Cookie c3=new Cookie("city3","Morbi");
		response.addCookie(c1);
		response.addCookie(c2);
		response.addCookie(c3);
		c1=new Cookie("city1","New");
		response.addCookie(c1);
	%>
	<a Href="index.jsp">Click to see Cookies</a>
</body>
</html>