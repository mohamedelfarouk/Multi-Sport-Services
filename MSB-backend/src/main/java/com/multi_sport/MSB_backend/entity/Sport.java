package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sports")
@NoArgsConstructor
@AllArgsConstructor
public class Sport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sport_id")
    private long id;
    
    @Column(name = "sport_name")
    private String name;

    @Enumerated(EnumType.STRING)
	@Column(name = "sport_type")
    private SportType sportType;
}
