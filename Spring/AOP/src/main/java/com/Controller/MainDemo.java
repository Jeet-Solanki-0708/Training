package com.Controller;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.dao.AccountDAO;

public class MainDemo {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext(Config.class);
		AccountDAO accountDAO=(AccountDAO)context.getBean("accountDAO");
		accountDAO.addAccount();
		context.close();
	}

}
