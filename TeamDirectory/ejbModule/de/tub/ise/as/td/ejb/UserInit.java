package de.tub.ise.as.td.ejb;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import de.tub.ise.as.td.entity.User;

@Singleton
@Startup
public class UserInit {
	@PersistenceContext
	EntityManager em;

	@PostConstruct
	public void ensureUsersExist() {
		User admin = new User("Superuser");
		em.persist(admin);
		admin = new User("Tai");
		em.persist(admin);
	}
}
