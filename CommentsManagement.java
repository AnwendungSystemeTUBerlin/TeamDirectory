package de.tub.ise.as.td.ejb;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import de.tub.ise.as.td.entity.Comment;

/**
 * EJB -- Stateless Session Bean
 *
 */
@Stateless
public class CommentsManagement {
	
	@PersistenceContext
	EntityManager em;
	
	/**
	 * Gibt alle in der Datenbank vorhandenen Comments zurück.
	 * 
	 * @return Liste von Comments.
	 */
	public List<Comment> getComments() {
		TypedQuery<Comment> query = em.createQuery("SELECT u FROM Comment u", Comment.class); //Entitäten(Klassen)name und nicht der Tabellenname! Kein SQL statement.
		return query.getResultList();
	}
	
	
	/**
	 * Gibt eine Liste von Comments aus der Datenbank zurück. Allerdings nur diejenigen,
	 * welche von dem User mit der übergebenen posterID verfasst wurden.
	 * 
	 * @param posterID
	 * @return Liste von Comments.
	 */
	public List<Comment> getCommentByPosterID(int posterID) {
		List<Comment> comments = em.createQuery("SELECT c FROM Comment c", Comment.class).getResultList();
		List<Comment> commentsList = new ArrayList<Comment>();
		for (int i=0; i<comments.size(); i++) {
			if (comments.get(i).getPosterID() == posterID) {
				commentsList.add(comments.get(i));
			}
		}
		return commentsList;
	}
	
	/**
	 * Gibt eine Liste von Comments aus der Datenbank zurück. Allerdings nur diejenigen,
	 * welche an den User mit der übergebenen receiverID gerichtet wurden.
	 * 
	 * @param posterID
	 * @return Liste von Comments.
	 */
	public List<Comment> getCommentByReceiverID(int receiverID) {
		List<Comment> comments = em.createQuery("SELECT c FROM Comment c", Comment.class).getResultList();
		List<Comment> commentsList = new ArrayList<Comment>();
		for (int i=0; i<comments.size(); i++) {
			if (comments.get(i).getPosterID() == receiverID) {
				commentsList.add(comments.get(i));
			}
		}
		return commentsList;
	}
	
}