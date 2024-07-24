package com.example.multi_sport;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
public class TrainingPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private double price;
    private boolean isGroup;
  
        @ManyToOne
    @JoinColumn(name = "trainer_id")
    private User trainer;

    @OneToMany(mappedBy = "trainingPackage", cascade = CascadeType.ALL)
    private List<TrainingSession> trainingSessions;



    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public boolean isGroup() {
        return isGroup;
    }
    public void setGroup(boolean isGroup) {
        this.isGroup = isGroup;
    }

 
     
}

