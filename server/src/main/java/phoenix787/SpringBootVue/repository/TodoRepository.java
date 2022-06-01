package phoenix787.SpringBootVue.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import phoenix787.SpringBootVue.model.Todo;

@RepositoryRestResource
public interface TodoRepository extends JpaRepository<Todo, Long> {}
