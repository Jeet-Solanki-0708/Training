package com.Configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private DataSource securityDataSource;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		//http.authorizeRequests().anyRequest().authenticated().and().formLogin().loginPage("/myLoginPage").loginProcessingUrl("/authenticateTheUser").permitAll().and().logout().permitAll();
		http.authorizeRequests()
			.antMatchers("/").hasRole("EMPLOYEE")
			.antMatchers("/leaders/**").hasRole("MANAGER")
			.antMatchers("/systems/**").hasRole("ADMIN")
			.and().formLogin().loginPage("/myLoginPage").loginProcessingUrl("/authenticateTheUser").permitAll()
			.and().logout().permitAll().and()
			.exceptionHandling().accessDeniedPage("/accessDenied");
			
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		auth.jdbcAuthentication().dataSource(securityDataSource)
		.usersByUsernameQuery("select username, password, enabled from users where username=?")
        .authoritiesByUsernameQuery("select username, authority from users where username=?");
		
		// This is not need for JDBC Authentication
		
//		UserBuilder user=User.withDefaultPasswordEncoder();
//		auth.inMemoryAuthentication()
//			.withUser(user.username("Dhairya").password("test123").roles("EMPLOYEE"))
//			.withUser(user.username("Umang").password("test123").roles("MANAGER","EMPLOYEE"))
//			.withUser(user.username("Jeet").password("test123").roles("ADMIN","EMPLOYEE"));
		
	}

	
	
}
