package entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "team_member")
public class TeamMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_member_id")
    private long teamMemberId;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "join_date", updatable = false)
    private Date joinDate;

    @PrePersist
    protected void onJoin() {
        this.joinDate = new Date();
    }

    public void setTeam(Team team) {
        this.team = team;
        if (team != null) {
        	team.getTeamMembers().add(this);
            team.setNumberOfMembers(team.getTeamMembers().size());
        }
    }
}
