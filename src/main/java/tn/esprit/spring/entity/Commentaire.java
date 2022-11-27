package tn.esprit.spring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;


@Entity
@Table(name = "Commentaire")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor	
public class Commentaire implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;	
	private String comment;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateAjout;
	@ManyToOne
	@JsonIgnore
	private Sujet sujet;
	private long iduser;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="commentaire")
	private Set<ReactionCommentaire> reactions;
	
}
