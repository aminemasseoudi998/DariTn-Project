package tn.esprit.spring.entity;

import java.io.Serializable;
import java.time.LocalDate;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Reclamation implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	Long id;
	String titre;
	String Sujet ;
	
	LocalDate date;
	
	@Enumerated(value = EnumType.STRING)
	ReclamationStatus status;
	
	String reponse;
	
	
	
	@ManyToOne
	@JsonIgnoreProperties({"reclamations", "reclamationsAdmin", "mobiliersVendeur", "mobiliersAchteur"})
	User user;
	
	@ManyToOne
	@JsonIgnoreProperties({"reclamations", "reclamationsAdmin", "mobiliersVendeur", "mobiliersAchteur"})
	User admin;

}
