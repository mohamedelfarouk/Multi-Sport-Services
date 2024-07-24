package entity;

import java.util.Set;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@AttributeOverride(name = "userId", column = @Column(name = "athlete_id"))
public class Athlete extends User {
	@ManyToMany
    @JoinTable(
        name = "user_sport",
        joinColumns = @JoinColumn(name = "athlete_id"),
        inverseJoinColumns = @JoinColumn(name = "sport_id")
    )
    private Set<Sport> sports;

}
