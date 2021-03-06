package de.tub.ise.as.td.ejb;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import de.tub.ise.as.td.entity.Comment;
import de.tub.ise.as.td.entity.User;

@Singleton
@Startup
public class ApplicationInit {
	@PersistenceContext
	EntityManager em;

	@PostConstruct
	public void ensureUsersExist() {
		//Stefan
		User stefan = new User("Stefan", "Yovchev");
		stefan.setUniversity("TU Berlin");
		stefan.setStudyCourse("Wirtschaftsinformatik");
		stefan.setAge(20);
		stefan.setImgPath("img_stefan.jpg");
		em.persist(stefan);
				
		//Sebastian F�hr
		User sebastian = new User("Sebastian", "F�hr");
		sebastian.setUniversity("TU Berlin");
		sebastian.setStudyCourse("Wirtschaftsinformatik");
		sebastian.setAge(19);
		sebastian.setImgPath("img_sebastian.png");
		em.persist(sebastian);
		
		//Nikolay Nikolov
		User nikolay = new User("Nikolay", "Nikolov");
		nikolay.setUniversity("TU Berlin");
		nikolay.setStudyCourse("Wirtschaftsinformatik");
		nikolay.setAge(19);
		nikolay.setImgPath("img_nikolay.jpg");
		em.persist(nikolay);
		
		//Victor
		User victor = new User("Bolz", "Victor");
		victor.setUniversity("TU Berlin");
		victor.setStudyCourse("Wirtschaftsinformatik");
		victor.setAge(19);
		em.persist(victor);
		
		
		//comments
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
