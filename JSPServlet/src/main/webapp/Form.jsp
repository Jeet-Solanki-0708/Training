<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action="DatabaseConnection.jsp">
		Enter Name:<input type="text" name="fname"><br>
		Enter Age:<input type="text" name="age"><br>
		Enter Last:<input type="text" name="lname"><br>
		<select name="subject">
		<option>Maths</option>
		<option>Chem</option>
		<option>Physics</option>
		<option>Diplo</option>
		</select>
		<br>
		Single:<input type="radio" name="mar" value="Single"><br>
		married:<input type="radio" name="mar" value="married"><br>
		<input type="checkbox" name="cities" value="Mumbai">Mumbai<br>
		<input type="checkbox" name="cities" value="Surat">Surat<br>
		<input type="checkbox" name="cities" value="Ahme">Ahme<br>
		<input type="submit" value="Submit"/>
	</form>
</body>
</html>