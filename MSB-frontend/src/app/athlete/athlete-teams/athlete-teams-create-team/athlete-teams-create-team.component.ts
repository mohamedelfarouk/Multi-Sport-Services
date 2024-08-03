import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component ,inject, signal} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { TeamMember } from './TeamMember';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-athlete-teams-create-team',
  standalone: true,
  imports: [MatButtonModule,MatIconModule, MatCardModule, MatChipsModule, MatProgressBarModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './athlete-teams-create-team.component.html',
  styleUrl: './athlete-teams-create-team.component.css'
})
export class AthleteTeamsCreateTeamComponent {
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly teamMembers = signal<TeamMember[]>([]);
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.teamMembers.update(teamMembers => [...teamMembers, {email: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(teamMember: TeamMember): void {
    this.teamMembers.update(teamMembers => {
      const index = teamMembers.indexOf(teamMember);
      if (index < 0) {
        return teamMembers;
      }

      teamMembers.splice(index, 1);
      this.announcer.announce(`Removed ${teamMember.email}`);
      return [...teamMembers];
    });
  }

  edit(teamMember: TeamMember, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(teamMember);
      return;
    }

    // Edit existing fruit
    this.teamMembers.update(teamMembers => {
      const index = teamMembers.indexOf(teamMember);
      if (index >= 0) {
        teamMembers[index].email = value;
        return [...teamMembers];
      }
      return teamMembers;
    });
  }
}
