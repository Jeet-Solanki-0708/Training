package Basic;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.cj.xdevapi.PreparableStatement;

public class ConnectionObject {

	static Connection getConnection()
	{
		Connection con=null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con=DriverManager.getConnection("jdbc:mysql://localhost/dhairya", "root", "root");
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return con;
	}
	
	public static void main(String[] args) {
		Query q=new Query();
		//q.insert();
		q.update();
		q.display();
		q.deleteData();
		q.display();
	}
}

class Query{
	Connection con=ConnectionObject.getConnection();
	void insert()
	{
		String insert="insert into record values(?,?,?)";
		try {
			PreparedStatement pst=con.prepareStatement(insert);
			pst.setString(1, "Sarang");
			pst.setInt(2, 15);
			pst.setString(3, "Patel");
			pst.executeUpdate();
			//con.prepareStatement(insert);
			pst.setString(1, "pathik");
			pst.setInt(2, 16);
			pst.setString(3, "Solanki");
			pst.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
	
	void display()
	{
		String display="select * from record";
		try {
			PreparedStatement pst=con.prepareStatement(display);
			ResultSet rs=pst.executeQuery();
			while(rs.next())
			{
				System.out.println(rs.getString(1)+" "+rs.getInt(2)+""+rs.getString(3));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	void update()
	{
		String update="update record set fname=?,lname=? where age=?";
		try {
			PreparedStatement pst=con.prepareStatement(update);
			pst.setString(1, "Rakesh");
			pst.setString(2, "Govind");
			pst.setInt(3, 10);
			pst.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	void deleteData()
	{
		String update="delete from record where age=?";
		try {
			PreparedStatement pst=con.prepareStatement(update);
			
			pst.setInt(1, 13);
			pst.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

