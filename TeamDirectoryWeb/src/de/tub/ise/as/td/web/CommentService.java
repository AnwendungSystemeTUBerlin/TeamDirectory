package de.tub.ise.as.td.web;

import de.tub.ise.as.td.ejb.UserManagement;
import de.tub.ise.as.td.entity.User;

import javax.ejb.EJB;
import java.util.List;

public class CommentService {

    @EJB
    private CommentManagement commentManagement;

    public CommentService() {
    }

    /**
     * Retrieves representation of an instance of User
     * @return an JSON as a string.
     */
    @GET
    @Produces("application/json")
    public String getCommentsAsJson() {
        List<Comment> comments = commentManagement.getComments();
        Jsonb jsonb = JsonbBuilder.create();
        return jsonb.toJson(comments);
    }

}
