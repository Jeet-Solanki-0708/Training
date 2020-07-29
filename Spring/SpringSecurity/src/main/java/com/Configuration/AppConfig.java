package com.Configuration;

import java.beans.PropertyVetoException;
import java.util.logging.Logger;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.mchange.v2.c3p0.ComboPooledDataSource;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com")
@PropertySource("classpath:persistence-mysql.properties")
public class AppConfig {

		@Autowired
		private Environment env;
	
		private Logger log=Logger.getLogger(getClass().getName());
		
		@Bean
		public ViewResolver viewResolver() {
		
			InternalResourceViewResolver viewResolver=new InternalResourceViewResolver();
			viewResolver.setPrefix("/WEB-INF/view/");
			viewResolver.setSuffix(".jsp");
			return viewResolver;
		}
		
		@Bean
		public DataSource securityDataSource() {
			ComboPooledDataSource securityDataSource=new ComboPooledDataSource();
			
			try {
				securityDataSource.setDriverClass(env.getProperty("jdbc.driver"));
			} catch (PropertyVetoException e) {
				// TODO Auto-generated catch block
				throw new RuntimeException(e);
			}
			log.info("JDBC url "+env.getProperty("jdbc.url"));
			securityDataSource.setJdbcUrl(env.getProperty("jdbc.url"));
			securityDataSource.setUser(env.getProperty("jdbc.user"));
			securityDataSource.setPassword(env.getProperty("jdbc.password"));
			securityDataSource.setInitialPoolSize(getIntProperty("connection.pool.initialPoolSize"));
			securityDataSource.setMinPoolSize(getIntProperty("connection.pool.minPoolSize"));
			securityDataSource.setMaxPoolSize(getIntProperty("connection.pool.maxPoolSize"));
			securityDataSource.setMaxIdleTime(getIntProperty("connection.pool.maxIdleTime"));
			return securityDataSource;
		}
		
		private int getIntProperty(String name) {
			String prop=env.getProperty(name);
			int val=Integer.parseInt(prop);
			return val;
		}
}
