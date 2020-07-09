<%@ page import="java.util.*" %>
<html>
<body>
<% 
	Cookie arr[]=request.getCookies();
	for(int i=0;i<arr.length;i++)
	{
		out.println(arr[i].getName()+" "+arr[i].getValue()+"<br>");
	}
%>
</body>
</html>
