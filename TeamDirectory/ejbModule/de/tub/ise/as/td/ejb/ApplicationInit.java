package de.tub.ise.as.td.ejb;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import de.tub.ise.as.td.entity.Comment;
import de.tub.ise.as.td.entity.User;

@Singleton
@Startup //Wird beim Start des Anwendungsservers ausgef�hrt
public class ApplicationInit {
	@PersistenceContext
	EntityManager em;

	@PostConstruct //Wenn die Klasse erzeugt wird (siehe Annotation Singletont) wird diese Methode aufgerufen
	public void ensureUsersExist() {
		//Sebastian F�hr
		User sebastian = new User("F�hr", "Sebastian");
		sebastian.setUniversity("TU Berlin");
		sebastian.setStudyCourse("Wirtschaftsinformatik");
		sebastian.setAge(19);
		em.persist(sebastian);
		
		//Stefan
		User stefan = new User("Unbekannt", "Stefan");
		stefan.setUniversity("TU Berlin");
		stefan.setStudyCourse("Wirtschaftsinformatik");
		stefan.setAge(0);
		em.persist(stefan);
		
		//Nikolay Nikolov
		User nikolay = new User("Nikolov", "Nikolay");
		nikolay.setUniversity("TU Berlin");
		nikolay.setStudyCourse("Wirtschaftsinformatik");
		nikolay.setAge(0);
		em.persist(nikolay);
		
		//Victor
		User victor = new User("Unbekannt", "Victor");
		victor.setUniversity("TU Berlin");
		victor.setStudyCourse("Wirtschaftsinformatik");
		victor.setAge(0);
		em.persist(victor);
		
		
		//Beispielkommentare
		Comment newComment = new Comment(stefan.getId(), sebastian.getId(), "Das Wetter ist sch�n.");
		newComment.setDate("13.06.2018");
		newComment.setTime("10:15");
		em.persist(newComment);
		
		newComment = new Comment(sebastian.getId(), stefan.getId(), "Das Wetter ist schlecht.");
		newComment.setDate("15.06.2018");
		newComment.setTime("18:43");
		em.persist(newComment);
	}
}
