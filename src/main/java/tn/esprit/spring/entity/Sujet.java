package tn.esprit.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "Sujet")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sujet implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String titre;
	@Column(columnDefinition="TEXT")
	private String description;
	@Temporal(TemporalType.DATE)
	private Date dateAjout;
	private String image;
	@ManyToOne
	User user;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="sujet")
	private Set<Commentaire> commentaires;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<Tag> tags;
	
}
