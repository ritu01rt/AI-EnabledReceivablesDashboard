package com.highradius.data;

public class data {

	private String custName, dueInDate,
			invoiceCurrency,  totalOpenAmount,notes,custNumber;
	private long docId, invoiceId;
	
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getDueInDate() {
		return dueInDate;
	}
	public void setDueInDate(String dueInDate) {
		this.dueInDate = dueInDate;
	}
	public String getInvoiceCurrency() {
		return invoiceCurrency;
	}
	public void setInvoiceCurrency(String invoiceCurrency) {
		this.invoiceCurrency = invoiceCurrency;
	}
	public String getTotalOpenAmount() {
		return totalOpenAmount;
	}
	public void setTotalOpenAmount(String totalOpenAmount) {
		this.totalOpenAmount = totalOpenAmount;
	}
	public long getDocId() {
		return docId;
	}
	public void setDocId(long docId) {
		this.docId = docId;
	}
	public long getInvoiceId() {
		return invoiceId;
	}
	public void setInvoiceId(long invoiceId) {
		this.invoiceId = invoiceId;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getCustNumber() {
		return custNumber;
	}
	public void setCustNumber(String custNumber) {
		this.custNumber = custNumber;
	}

	

	
}