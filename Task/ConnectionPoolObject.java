package Basic;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.PooledConnection;

import org.apache.commons.dbcp.BasicDataSource;

import com.mysql.cj.jdbc.MysqlConnectionPoolDataSource;

public class ConnectionPoolObject {
	Connection getConnectionObject()
	{
		MysqlConnectionPoolDataSource datasource=new MysqlConnectionPoolDataSource();
		datasource.setURL("jdbc:mysql://localhost/dhairya");
		datasource.setUser("root");
		datasource.setPassword("root");
		PooledConnection pool;
		//BasicDataSource bd=new BasicDataSource();
		
		Connection connection=null;
		try {
			pool = datasource.getPooledConnection();
			connection=pool.getConnection();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return connection;
	}
}
