import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrainerListComponent } from './trainer-list.component';
import { TrainingSessionService} from '../trainer-sessions.service'; // Adjust the path as needed

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TrainerListComponent
  ],
  providers: [TrainingSessionService]
})
export class TrainingModule { }
