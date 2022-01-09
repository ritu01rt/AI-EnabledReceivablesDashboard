package com.Milestone2HRC;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DeleteServlet")
public class DeleteServlet extends HttpServlet {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/h2h_internship";
	// Database credentials
	static final String USER = "root";
	static final String PASS = "rshan";
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("doc_id");//id of the row getting deleted i/p from user
		Connection conn = null;
		Statement stmt = null;
		int count=0;
		try{
			//STEP 2: Register JDBC driver
			Class.forName(JDBC_DRIVER);
			//STEP 3: Open a connection
			conn = DriverManager.getConnection(DB_URL,USER,PASS);
			String sql;
			sql = "DELETE FROM invoice_details WHERE invoice_id="+id+";";
			stmt = conn.createStatement();
			count=stmt.executeUpdate(sql);
		
		}
		catch(SQLException se){
			se.printStackTrace();
			}
		catch(Exception e){
			//Handle errors for Class.forName
			e.printStackTrace();
			}
		finally{
			//finally block used to close resources
			try{
				if(stmt!=null)
					stmt.close();
			}
			catch(SQLException se2){
			}// nothing we can do
			try{
				if(conn!=null)
					conn.close();
			}
			catch(SQLException se){
				se.printStackTrace();
			}
		}
		PrintWriter out = response.getWriter(); 
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(count);
		out.print(" data deleted successfully");
	    out.close();

	}

}
