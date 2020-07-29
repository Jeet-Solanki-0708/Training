package com.aspect;

import java.util.logging.Logger;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class CRMLoggingAspect {

	private Logger log=Logger.getLogger(getClass().getName());
	
	@Pointcut("execution(* com.Controller.*.*(..))")
	private void forControllerPackage() {}
	
	@Pointcut("execution(* com.dao.*.*(..))")
	private void forDAOPackage() {}
	
	@Pointcut("execution(* com.service.*.*(..))")
	private void forServicePackage() {}
	
	@Pointcut("forServicePackage() || forDAOPackage() || forControllerPackage()")
	private void forAppFlow() {}
	
	@Before("forAppFlow()")
	public void before(JoinPoint joinPoint) {
		String method=joinPoint.getSignature().toShortString();
		log.info("Before Calling method "+method);
	}
	
	@AfterReturning(pointcut = "forAppFlow()",returning = "result")
	public void afterReturning(JoinPoint joinPoint,Object result){
		String method=joinPoint.getSignature().toShortString();
		log.info("Before Calling method "+method);
	}
}
