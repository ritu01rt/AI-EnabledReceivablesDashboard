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

@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/h2h_internship";
	// Database credentials
	static final String USER = "root";
	static final String PASS = "rshan";
	
	//A function to find if a string is null or empty-null amputation check
	public static boolean isNullOrEmpty(String str) {
        if(str != null && !str.isEmpty())
            return false;
        return true;
	}
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			String name_customer = request.getParameter("cname");
			String cust_number = request.getParameter("cnum");
			String total_open_amount = request.getParameter("iamt");
			String invoice_id = request.getParameter("inum");
			String doc_id=invoice_id;
			String due_in_date = request.getParameter("ddate");
			String notes = request.getParameter("nts");
			Connection conn = null;
			Statement stmt = null;
			PreparedStatement pst = null;
			String sql = null;
			int count1=0;
			
			try{
				//STEP 2: Register JDBC driver
				//STEP 3: Open a connection
				conn = DriverManager.getConnection(DB_URL,USER,PASS);
				stmt = conn.createStatement();
				
				 stmt = conn.createStatement();
				 sql = ("INSERT INTO invoice_details(cust_number,name_customer,doc_id,due_in_date,total_open_amount,invoice_id,notes) VALUES('"+cust_number+"','"+name_customer+"','"+doc_id+"','"+due_in_date+"','"+total_open_amount+"','"+invoice_id+"','"+notes+"');");
			 
				 count1=stmt.executeUpdate(sql);
			}
			
			catch(SQLException se){
				 //Handle errors for JDBC
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
					if(pst!=null)
						pst.close();
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
			int x=0,sum=0;
	
			out.print(count1);
			out.print(" data added successfully");
			out.close();
	}	
}

