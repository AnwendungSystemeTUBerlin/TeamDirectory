package de.tub.ise.as.td.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import de.tub.ise.as.td.entity.Comment;

/**
 * EJB -- Stateless Session Bean
 * @author Sebastian Führ
 *
 */
@Stateless
public class CommentsManagement {
	
	@PersistenceContext
	EntityManager em;
	
	public List<Comment> getComments() {
		TypedQuery<Comment> query = em.createQuery("SELECT u FROM Comment u", Comment.class); //Entitäten(Klassen)name und nicht der Tabellenname! Kein SQL statement.
		return query.getResultList();
	}
	
}