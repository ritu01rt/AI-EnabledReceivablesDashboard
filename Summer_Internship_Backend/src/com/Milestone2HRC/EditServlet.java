package com.Milestone2HRC;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/h2h_internship";
	// Database credentials
	static final String USER = "root";
	static final String PASS = "rshan";
	public static boolean isNullOrEmpty(String str) {
        if(str != null && !str.isEmpty())
            return false;
        return true;
    }  
//taking i/p of doc_id to be changed and notes and amount to be edited
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			String total_open_amount = request.getParameter("iamount");
			String doc_id = request.getParameter("docid");
			String notes = request.getParameter("notes");
			Connection conn = null;
			Statement stmt = null;
		
			String sql = null;
			int count1=0;
			try{
			//STEP 2: Register JDBC driver
			//STEP 3: Open a connection
				conn = DriverManager.getConnection(DB_URL,USER,PASS);
				stmt = conn.createStatement();
				stmt = conn.createStatement();
				sql = ("UPDATE invoice_details SET total_open_amount ='"+total_open_amount+"', notes = '"+notes+"' where doc_id = '"+doc_id+"';");
				//STEP 4: Execute a query
				count1=stmt.executeUpdate(sql);
			}
			catch(SQLException se){
				se.printStackTrace();
			}
			catch(Exception e){
				e.printStackTrace();
			}
			finally{
				//finally block used to close resources
				try{
					if(stmt!=null)
						stmt.close();
					}catch(SQLException se2){
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
		
		out.print(count1);
		out.print(" data updated successfully");
		out.close();
	}
}

