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
	
	public Comment getCommentByPosterID(int posterID) {
		List<Comment> comments = em.createQuery("SELECT c FROM Comment c", Comment.class).getResultList();
		for (int i=0; i<comments.size(); i++) {
			if (comments.get(i).getPosterID() == posterID) {
				return comments.get(i);
			}
		}
		return null;
	}
	
	public Comment getCommentByReceiverID(int receiverID) {
		List<Comment> comments = em.createQuery("SELECT c FROM Comment c", Comment.class).getResultList();
		for (int i=0; i<comments.size(); i++) {
			if (comments.get(i).getReceiverID() == receiverID) {
				return comments.get(i);
			}
		}
		return null;
	}
	
}