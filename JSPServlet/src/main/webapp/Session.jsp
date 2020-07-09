<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action="Session.jsp">
		Enter:<input type="text" name="str">
		<input type="submit" value="Clickme">
	</form>
<% 
	List<String> books=(List<String>)session.getAttribute("sess1");
	if(books==null)
	{
		books=new ArrayList<String>();
		session.setAttribute("sess1", books);
	}
	String str=request.getParameter("str");
	if(str!=null && str!="")
		books.add(str);
%>
<ol>
<%	
	for(String s:books)
	{
		out.println("<li>"+s+"</li>");
	}	
%>
</ol>
</body>
</html>