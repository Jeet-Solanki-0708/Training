package com.Controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ViewServlet
 */
public class ViewServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		Cookie arr[]=request.getCookies();
		String name="";
		for(Cookie c:arr)
		{
			if(c.getName().equals("fname"))
			{
				name=c.getValue();
				break;
			}
		}
		if(name==null || name.equals(""))
		{
			out.print("<h2>You are not signed in</h2>");
			RequestDispatcher rd=request.getRequestDispatcher("Homepage.jsp");
			rd.include(request, response);
		}
		else
		{
			out.print("<h2>Name: "+name+"</h2>");
			RequestDispatcher rd=request.getRequestDispatcher("Homepage.jsp");
			rd.include(request, response);
		}
	}

}
