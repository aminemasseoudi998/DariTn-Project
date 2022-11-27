package tn.esprit.spring.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Mobilier implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
    String titre ;
    String description ;
    
    @Enumerated(EnumType.STRING)
    EtatMobilier etatMobilier;
    LocalDate date;
    
    
    LocalDate dateVendu;
    
	double prix;
	
	//@Column(columnDefinition="tinyint(1) default 1")
	boolean status = true;
	
	
	@ManyToOne
	@JsonIgnoreProperties({"mobiliersAchteur", "mobiliersVendeur"})
	User achteur;
	
	
	@ManyToOne
	@JsonIgnoreProperties({"mobiliersAchteur", "mobiliersVendeur"})
	User vendeur;
	
	//@JsonIgnore
	@OneToMany(mappedBy="mobilier",cascade =CascadeType.REMOVE)
	@JsonIgnoreProperties("mobilier")
	private Set<ImageVideo> imageVideo ;
	
	
	//@JsonIgnore
	//@OneToOne 
	//private Reglement reglement ;

	
	
}

