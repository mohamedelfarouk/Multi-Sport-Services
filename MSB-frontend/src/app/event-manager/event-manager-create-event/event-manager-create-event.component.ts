import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-event-manager-create-event',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './event-manager-create-event.component.html',
  styleUrl: './event-manager-create-event.component.css'
})
export class EventManagerCreateEventComponent implements OnInit{

  createEventForm: FormGroup;
  isEventCreated: boolean = false; // Flag to track event creation

  constructor(private fb: FormBuilder) {
    this.createEventForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.createEventForm.valid) {
      console.log('Form Submitted', this.createEventForm.value);
      this.isEventCreated = true; // Set the flag to true on successful submission
      console.log('Event Created:', this.isEventCreated); // Log to check
      // Optionally, reset the form if needed
      this.createEventForm.reset();
    }
  }
  
}
