package de.tub.ise.as.td.web;

import java.util.List;

import javax.ejb.EJB;
import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import de.tub.ise.as.td.ejb.UserManagement;
import de.tub.ise.as.td.entity.User;

@Path("/user")
public class UserService {
   
    @EJB
    private UserManagement userMgmt;

    public UserService() {
    }

    /**
     * Retrieves representation of an user with the specific name and surname. If
     * there is no such user, all user get returned.
     * 
     * @return an JSON as a string.
     */
    @GET
    @Produces("application/json")
    public String getUserAsJson(@QueryParam("name") String name,
    							@QueryParam("surname") String surname) {
    	Jsonb jsonb = JsonbBuilder.create();
    	if (name != null || surname != null) {
    		return jsonb.toJson(userMgmt.getUser(name, surname));
    	} else {
	        List<User> users = userMgmt.getUsers();
	        return jsonb.toJson(users);
    	}
    }
    
    @GET
    @Path("/{id}")
    @Produces("application/json")
    public String getUserAsJson(@PathParam("id") int userID) {
    	Jsonb jsonb = JsonbBuilder.create();
    	return jsonb.toJson(userMgmt.getUser(userID));
    }

}