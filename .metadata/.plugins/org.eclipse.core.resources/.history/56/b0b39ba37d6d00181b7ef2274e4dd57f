package de.tub.ise.as.td.web;

import java.util.List;

import javax.ejb.EJB;
import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.tub.ise.as.td.ejb.UserManagement;
import de.tub.ise.as.td.entity.User;

@Path("/user")
public class UserService {
   
    @EJB
    private UserManagement userMgmt;

    public UserService() {
    }

    /**
     * Retrieves representation of an instance of User
     * @return an JSON as a string.
     */
    @GET
    @Produces("application/json")
    public String getUserAsJson() {
        List<User> users = userMgmt.getUsers();
        Jsonb jsonb = JsonbBuilder.create();
        return jsonb.toJson(users);
    }

}