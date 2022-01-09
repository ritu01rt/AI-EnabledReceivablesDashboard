package com.highradius.dbconnection;

import java.sql.*;
import java.util.ArrayList;

import com.highradius.data.data;

public class dbConnection {
	private static String driver = "com.mysql.cj.jdbc.Driver";
	private static final String url = "jdbc:mysql://localhost:3306/h2h_internship";
	private static final String user = "root";
	private static final String pass = "root";

	public ArrayList<data> getData() throws Exception {

		Class.forName(driver);

		Connection con = DriverManager.getConnection(url, user, pass);

		Statement st = con.createStatement();

		String query = "SELECT name_customer,invoice_id,doc_id,due_in_date,notes,total_open_amount,cust_number FROM invoice_details";
		ResultSet rs = st.executeQuery(query);

		ArrayList<data> a = new ArrayList<>();
		while (rs.next()) {
			data p = new data();
			p.setCustName(rs.getString(1));
			p.setInvoiceId(rs.getLong(2));
			p.setDocId(rs.getLong(3));
			p.setDueInDate(String.valueOf(rs.getDate(4)));
			p.setNotes(rs.getString(5));
			p.setTotalOpenAmount(rs.getString(6));
			p.setCustNumber(rs.getString(7));
			a.add(p);
		}
		return a;

	}

}