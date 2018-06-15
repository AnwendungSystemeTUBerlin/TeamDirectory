package de.tub.ise.as.td.entity;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author Sebastian Führ
 *
 */
@Entity //für JPA wichtig
@Table(name = "COMMENTSTABLE") //optionale Notation
public class Comment implements Serializable {
	private static final long serialVersionUID = 384032570455381853L;
	@Id
	int receiverID;
	String date,
		   time,
		   content;
	int posterID;
	
	public Comment() {
		super();
	}
	
	public Comment(int receiverID, int posterID, String content) {
		this.receiverID = receiverID;
		initDateAndTime();
	}
	
	public void initDateAndTime() {
		Calendar calender = GregorianCalendar.getInstance();
		Date dateCal = calender.getTime();
		SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy");
		date = formatter.format(dateCal);
		formatter = new SimpleDateFormat("HH:mm");
		time = formatter.format(dateCal);
	}

	public String getDate() {
		return date;
	}

	public void setDate(String datum) {
		this.date = datum;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getPosterID() {
		return posterID;
	}

	public void setPosterID(int posterID) {
		this.posterID = posterID;
	}

	public int getReceiverID() {
		return receiverID;
	}

	public void setReceiverID(int receiverID) {
		this.receiverID = receiverID;
	}

}