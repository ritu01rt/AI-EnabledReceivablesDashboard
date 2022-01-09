package com.Milestone2HRC;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
//import com.higradius.Response;

@WebServlet("/TableRetrieval")
public class TableRetrieval extends HttpServlet {
	//	private Response resp = new Response(); 
	 // JDBC driver name and database URL
		static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
		static final String DB_URL = "jdbc:mysql://localhost/h2h_internship";
		// Database credentials
		static final String USER = "root";
		static final String PASS = "rshan";

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			Connection conn = null;
			Statement stmt = null;
			int first_data=0,last_data=0,page_limit=0;
			String page = request.getParameter("page");//implementing infinite scrolling
			String limit = request.getParameter("limit");
			int page_no=Integer.valueOf(page);
			page_limit=Integer.valueOf(limit);
			ArrayList<Pojo> list = new ArrayList<>();
			try{
			//STEP 2: Register JDBC driver
				Class.forName(JDBC_DRIVER);
			//STEP 3: Open a connection
				conn = DriverManager.getConnection(DB_URL,USER,PASS);
				first_data=((page_no-1)*page_limit);
				last_data=first_data+(page_limit-1);
				String sql;

				sql = "SELECT * FROM invoice_details LIMIT "+String.valueOf(first_data)+","+String.valueOf(page_limit)+";";
				stmt = conn.createStatement();
			
			//STEP 4: Execute a query
				ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				String s;
				Pojo object = new Pojo();
			    object.setBusiness_code(rs.getString("business_code"));
			    object.setCust_number(rs.getString("cust_number"));
			    object.setName_customer(rs.getString("name_customer"));
			    object.setClear_date(rs.getDate("clear_date"));
			    object.setBusiness_year(rs.getDouble("business_year"));
			    object.setDoc_id(rs.getDouble("doc_id"));
			    object.setPosting_date(rs.getDate("posting_date"));
			    object.setDocument_create_date(rs.getDate("document_create_date"));			    
			    object.setDue_in_date(rs.getDate("due_in_date"));
			    object.setInvoice_currency(rs.getString("invoice_currency"));
			    object.setDocument_type(rs.getString("document_type"));
			    object.setPosting_id(rs.getDouble("posting_id"));
			    object.setArea_business(rs.getString("area_business"));
			    object.setTotal_open_amount(rs.getDouble("total_open_amount"));
			    object.setBaseline_create_date(rs.getDate("baseline_create_date"));
			    object.setCust_payment_terms(rs.getString("cust_payment_terms"));
			    object.setInvoice_id(rs.getDouble("invoice_id"));
			    object.setIsOpen(rs.getInt("isOpen"));
			    s=(rs.getString("notes"));
			    if(rs.getString("notes")==null)
			    {
			    	s="Lorem Ipsum";
			    }
			    object.setNotes(s);
			    list.add(object);
			}}
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
		
			Gson gson = new Gson();
			String data = gson.toJson(list);
			PrintWriter out = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			out.print(data);
			out.close();
		
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
