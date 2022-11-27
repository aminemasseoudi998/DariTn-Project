package tn.esprit.spring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class ReactionCommentaire {
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private boolean reaction;
	private long iduser;
	
	@JsonIgnore
	@ManyToOne
	Commentaire commentaire;
	
	public boolean getReaction() {
		return this.reaction;
	}


}
