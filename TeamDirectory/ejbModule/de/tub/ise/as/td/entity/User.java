package de.tub.ise.as.td.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Beispielentität
 * @author Sebastian Führ
 *
 */
@Entity //für JPA wichtig
@Table(name = "USERTABLE") //optionale Notation
public class User implements Serializable {
	private static final long serialVersionUID = -577432887255987479L;
	@Id //IDs werden für jedes DBS benötigt (Primärschlüssel)
	@GeneratedValue //Die ID wird automatisch gesetzt und hochgezählt (generiert)
	int id;
	String name,
		   surname,
		   university,
		   studyCourse;
	int userAge;
	
	public User() {
		super();
	}
	
	public User(String name, String surname) {
		this.name = name;
		this.surname = surname;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String vorname) {
		this.surname = vorname;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public int getAge() {
		return userAge;
	}

	public void setAge(int alter) {
		this.userAge = alter;
	}

	public String getStudyCourse() {
		return studyCourse;
	}

	public void setStudyCourse(String studyCourse) {
		this.studyCourse = studyCourse;
	}
	
}
