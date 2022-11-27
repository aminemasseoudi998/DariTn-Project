package tn.esprit.spring.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "users", 
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@NotBlank
	  @Size(max = 20)
	  private String username;
	@NotBlank
	  @Size(max = 50)
	  @Email
	  private String email;
	
	@NotBlank
	  @Size(max = 120)
	  private String password;
	
	@Column(columnDefinition = "LONGTEXT")
    String image ;
	
	@ElementCollection
	@ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.REMOVE)
	  @JoinTable(  name = "user_roles", 
	        joinColumns = @JoinColumn(name = "user_id"), 
	        inverseJoinColumns = @JoinColumn(name = "role_id"))
	  private Set<Role> roles = new HashSet<>();
	
	private long telephone;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	private Set<RDV> RDVS;
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	private Set<Coupon> coupons;
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	private List<Annonce> annonces;
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="Acheteur")
	private List<Annonce> MesBiens;
	

	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	private Set<Sujet> sujets;
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	private Set<Amenagement> demenagments;
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	private Set<Amenagement> amenagements;
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	private Set<Messagerie> messages;


	@OneToMany( mappedBy="vendeur")
	@JsonIgnoreProperties({"user", "reclamations"})
	private Set<Mobilier> mobiliersVendeur;

	@OneToMany( mappedBy="achteur")
	@JsonIgnoreProperties({"user", "reclamations"})
	private Set<Mobilier> mobiliersAchteur;

	@OneToMany( mappedBy="user")
	private Set<Reclamation> reclamations;


	//jdida
	@OneToMany( mappedBy="admin")
	private Set<Reclamation> reclamationsAdmin;
	
	
	 public User() {
	  }

	  public User(String username, String email, String password,Long tel) {
	    this.username = username;
	    this.email = email;
	    this.password = password;
	    this.telephone=tel;
	  }

	  public Long getId() {
	    return id;
	  }

	  public void setId(Long id) {
	    this.id = id;
	  }

	  public String getUsername() {
	    return username;
	  }

	  public void setUsername(String username) {
	    this.username = username;
	  }

	  public String getEmail() {
	    return email;
	  }

	  public void setEmail(String email) {
	    this.email = email;
	  }

	  public String getPassword() {
	    return password;
	  }

	  public void setPassword(String password) {
	    this.password = password;
	  }

	  public Set<Role> getRoles() {
	    return roles;
	  }

	  public void setRoles(Set<Role> roles) {
	    this.roles = roles;
	  }
	
	  @JsonManagedReference(value="annonce")
	  public List<Annonce> getAnnonces() {
			return annonces;
		}

		public void setAnnonces(List<Annonce> annonces) {
			this.annonces = annonces;
		}
		  @JsonManagedReference(value="biens")
		public List<Annonce> getMesBiens() {
			return MesBiens;
		}

		public void setMesBiens(List<Annonce> mesBiens) {
			MesBiens = mesBiens;
		}

		@JsonManagedReference(value="RDV")
		public Set<RDV> getRDVS() {
			return RDVS;
		}

		public void setRDVS(Set<RDV> rDVS) {
			RDVS = rDVS;
		}
		
	
}
