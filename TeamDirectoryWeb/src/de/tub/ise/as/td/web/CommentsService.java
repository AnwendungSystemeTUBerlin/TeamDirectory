package de.tub.ise.as.td.web;

import javax.ejb.EJB;
import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import de.tub.ise.as.td.ejb.CommentsManagement;

@Path("/comments")
public class CommentsService {
   
    @EJB
    private CommentsManagement commentsMgmt;

    public CommentsService() {
    }

    /**
     * Retrieves all Comments which are saved in the database for a specific user id.
     * The parameter "forWhom" indicates either if the Comments are retrieved which the
     * user wrote or which where written to the user.
     * 
     * @param posterID
     * @param userID
     * @return an JSON as a string.
     */
    @GET
    @Produces("application/json")
    public String getCommentsAsJson(@QueryParam("posterID") int posterID, 
    								@QueryParam("receiverID") int receiverID) {
    	Jsonb jsonb = JsonbBuilder.create();
    	if (posterID != 0) {
        	return jsonb.toJson(commentsMgmt.getCommentsByPosterID(posterID));
    	} else if (receiverID != 0) {
    		return jsonb.toJson(commentsMgmt.getCommentsByReceiverID(receiverID));
    	} else {
    		return "";
    	}
    }

}