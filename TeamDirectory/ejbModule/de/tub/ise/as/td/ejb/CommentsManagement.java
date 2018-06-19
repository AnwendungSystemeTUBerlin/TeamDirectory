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
	 * Returns all Comments which are currently saved in the database.
	 * 
	 * @return List of Comments.
	 */
	public List<Comment> getComments() {
		TypedQuery<Comment> query = em.createQuery("SELECT u FROM Comment u", Comment.class); //Entitäten(Klassen)name und nicht der Tabellenname! Kein SQL statement.
		return query.getResultList();
	}
	
	
	/**
	 * Returns a list of Comments from the database which where posted by the User
	 * with the given attribute posterID.
	 * 
	 * @param posterID
	 * @return List of Comments.
	 */
	public List<Comment> getCommentsByPosterID(int posterID) {
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
	 * Returns a list of Comments from the database which where posted to the 
	 * User with the given attribute receiverID.
	 * 
	 * @param posterID
	 * @return List of Comments.
	 */
	public List<Comment> getCommentsByReceiverID(int receiverID) {
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