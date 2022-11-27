package tn.esprit.spring.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Transporteur implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long idTransporteur;
	String nom;
	String prenom;
	Integer num;
	Integer cin;
	@Enumerated(EnumType.STRING)
	EtatTranporteur etat;
	
	@OneToMany (cascade = CascadeType.ALL , mappedBy="transporteur")
	@JsonIgnore
	private Set<Demenagement> demenagements;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="transporteur")
	private Set<Calendar> calendars;


}
