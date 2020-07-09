<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
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
		Connection conn;
		PreparedStatement pst;
		Class.forName("com.mysql.jdbc.Driver");
		conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/dhairya", "root", "root");
		String s="select * from record";
		String s1="insert into record() values(?,?,?)";
		pst=conn.prepareStatement(s1);
		pst.setString(1, "Dhairya");
		pst.setInt(2, 18);
		pst.setString(3, "Shah");
		pst.executeUpdate();
		pst=conn.prepareStatement(s);
		ResultSet rs=pst.executeQuery();
		out.println("<table border=1><tr><th>Name</th><th>Age</th></tr>");
		while(rs.next())
		{
			out.println("<tr><td>"+rs.getString(1)+"</td><td>"+rs.getInt(2)+"</td></tr>");
		}
		out.println("</table>");
		
	%>
</body>
</html>