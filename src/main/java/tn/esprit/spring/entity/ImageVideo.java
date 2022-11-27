package tn.esprit.spring.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString

public class ImageVideo implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	//LONGTEXT
	@Column(columnDefinition = "LONGTEXT")
    String image ;
   // @JsonIgnore

    @ManyToOne(cascade = CascadeType.ALL)
	Mobilier mobilier; 

    @ManyToOne(cascade = CascadeType.ALL)
	Annonce annonce;

}
