package Basic;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.PooledConnection;

import org.apache.commons.dbcp.BasicDataSource;

import com.mysql.cj.jdbc.MysqlConnectionPoolDataSource;

public class ConnectionPool {
	
	
	
	public static void main(String[] args) {
		MysqlConnectionPoolDataSource ds=new MysqlConnectionPoolDataSource();
		ds.setURL("jdbc:mysql://localhost/dhairya");
		ds.setUser("root");
		ds.setPassword("root");
		PooledConnection pc;
		BasicDataSource bd=new BasicDataSource();
		
		Connection conn;
		try {
			pc = ds.getPooledConnection();
			conn=pc.getConnection();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
}
