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
	 * Gibt alle in der Datenbank gespeicherten User zur�ck.
	 * @return Liste von User.
	 */
	public List<User> getUsers() {
		TypedQuery<User> query = em.createQuery("SELECT u FROM User u", User.class); //Entit�ten(Klassen)name und nicht der Tabellenname! Kein SQL statement.
		return query.getResultList();
	}
	
	/**
	 * Gibt einen bestimmten Benutzer zur�ck, der die �bergebene ID besitzt.
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
	
}
