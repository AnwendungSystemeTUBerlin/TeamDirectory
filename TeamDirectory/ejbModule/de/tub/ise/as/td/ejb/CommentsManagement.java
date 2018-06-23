package de.tub.ise.as.td.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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
		return em.createQuery("SELECT c FROM Comment c", Comment.class).getResultList();
	}
	
	/**
	 * Creates and persists a new comment in the database
	 * 
	 * @param comment
	 */
	public void saveComment(Comment comment) {
		Comment c = new Comment(comment.getReceiverID(), comment.getPosterID(), comment.getContent());
		
		em.persist(c);
	}
	
	/**
	 * Returns a list of Comments from the database which where posted by the User
	 * with the given attribute posterID.
	 * 
	 * @param posterID
	 * @return List of Comments.
	 */
	public List<Comment> getCommentsByPosterID(int posterID) {
		return em.createQuery(String.format("SELECT c, u.name FROM Comment c, User u WHERE c.posterID = %d", posterID), Comment.class).getResultList();
	}
	
	/**
	 * Returns a list of Comments from the database which where posted to the 
	 * User with the given attribute receiverID.
	 * 
	 * @param posterID
	 * @return List of Comments.
	 */
	public List<Comment> getCommentsByReceiverID(int receiverID) {
		return em.createQuery(String.format("SELECT c, u FROM Comment c, User u WHERE c.receiverID = %d AND u.id = c.posterID", receiverID), Comment.class).getResultList();
	}
	
}