package de.tub.ise.as.td.ejb;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

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
		TypedQuery<User> query = em.createQuery("SELECT u FROM User u", User.class);
		return query.getResultList();
	}
	
	/**
	 * Returns a specific User with the given ID.
	 * 
	 * @param userID
	 * @return User
	 */
	public User getUser(int userID) {
		List<User> users = em.createQuery("SELECT u FROM User u", User.class).getResultList();
		for (int i=0; i < users.size(); i++) {
			if (users.get(i).getId() == userID) {
				return users.get(i);
			}
		}
		return null;
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
		List<User> users = em.createQuery("SELECT u FROM User u", User.class).getResultList();
		for (int i=0; i < users.size(); i++) {
			if (users.get(i).getName() == name && users.get(i).getSurname() == surname) {
				return users.get(i);
			}
		}
		User newUser = new User(name, surname);
		newUser.setAge(-1);
		newUser.setUniversity("");
		newUser.setStudyCourse("");
		return newUser;
	}
	
}
