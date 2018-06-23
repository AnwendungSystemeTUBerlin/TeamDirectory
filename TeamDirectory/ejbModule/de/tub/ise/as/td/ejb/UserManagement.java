package de.tub.ise.as.td.ejb;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import de.tub.ise.as.td.entity.User;

/**
 * EJB -- Stateless Session Bean
 *
 */
@Stateless
public class UserManagement {
	
	@PersistenceContext
	EntityManager em;
	
	@EJB
	ApplicationInit userInit;
	
	/**
	 * Returns all Users which are currently saved in the database.
	 * 
	 * @return List of User
	 */
	public List<User> getUsers() {
		return em.createQuery("SELECT u FROM User u", User.class).getResultList();
	}
	
	/**
	 * Returns a specific User with the given ID.
	 * 
	 * @param userID
	 * @return User
	 */
	public User getUser(int userID) {
		return em.createQuery(String.format("SELECT u FROM User u WHERE u.id = %d", userID), User.class).getSingleResult();
	}
	
	/**
	 * Validates if there exists a User in the databse with the given name
	 * and surname and returns this User. If not, creates a new User with
	 * the given parameters and sets the other attributes university,
	 * studyCourse and age to "", "", and -1.
	 * 
	 * @param name
	 * @param surname
	 * @return User
	 */
	public User getUser(String name, String surname) {
		User user = em.createQuery(String.format("SELECT u FROM User u WHERE u.name = \"%s\" AND u.surname = \"%s\"", name, surname), User.class).getSingleResult();

		if (user != null) {
			return user;
		}
		
		user = new User(name, surname);
		user.setAge(-1);
		user.setUniversity("");
		user.setStudyCourse("");
		
		em.persist(user);
		
		return user;
	}
	
	
	
	
}
