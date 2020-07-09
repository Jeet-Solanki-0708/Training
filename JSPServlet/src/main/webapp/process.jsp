<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<%=request.getParameter("fname") %>
	<%=request.getParameter("subject") %>
	<%=request.getParameter("mar") %>
	<%
		String a[]=request.getParameterValues("cities");
		for(String s:a)
		{
			out.println(s);
		}
	%>
	First name : ${param.fname} <br>
	Subject name : ${param.subject} <br>
	${param.mar}
</body>
</html>