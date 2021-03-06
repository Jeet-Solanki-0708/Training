package com.Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FirstServletContext
 */
public class FirstServletContext extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		ServletContext s=getServletContext();
		Enumeration<String> e=s.getInitParameterNames();
		String str="";
		while(e.hasMoreElements())
		{
			str=e.nextElement();
			out.println(s.getInitParameter(str));
		}
	}
}
