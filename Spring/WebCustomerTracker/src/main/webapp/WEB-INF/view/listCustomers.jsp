<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<input type="button" value="Add Customer" onclick="window.location.href='/WebCustomerTracker/customer/addCustomer';return false;"/>

 <form:form action="search" method="GET">
                Search customer: <input type="text" name="theSearchName" />
                
                <input type="submit" value="Search" class="add-button" />
            </form:form>

	<table>
	<c:forEach var="customer" items="${customers}">
		<c:url var="updateLink" value="/customer/updateForm">
			<c:param name="customerId" value="${customer.id }"/>
		</c:url>
		<c:url var="deleteLink" value="/customer/delete">
			<c:param name="customerId" value="${customer.id }"/>
		</c:url>
		<tr>
			<td>${customer.firstName}</td>
			<td>${customer.lastName}</td>
			<td>${customer.email}</td>
			<td><a href="${updateLink }">Update</a>|<a href="${deleteLink }">Delete</a></td>
		</tr>
		
	</c:forEach>
	</table>
</body>
</html>