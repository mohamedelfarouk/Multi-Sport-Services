package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.Event;
import com.multi_sport.MSB_backend.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        try {
            Event createdEvent = eventRepository.save(event);
            return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Optional<Event> event = eventRepository.findById(id);
        return event.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Optional<Event> optionalEvent = eventRepository.findById(id);

        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            
            if (eventDetails.getEventName() != null) {
                event.setEventName(eventDetails.getEventName());
            }
            if (eventDetails.getDescription() != null) {
                event.setDescription(eventDetails.getDescription());
            }
            if (eventDetails.getRegistrationFee() != null) {
                event.setRegistrationFee(eventDetails.getRegistrationFee());
            }
            if (eventDetails.getStartDate() != null) {
                event.setStartDate(eventDetails.getStartDate());
            }
            if (eventDetails.getEndDate() != null) {
                event.setEndDate(eventDetails.getEndDate());
            }
            if (eventDetails.getDuration() != null) {
                event.setDuration(eventDetails.getDuration());
            }
            if (eventDetails.getMaxParticipants() != null) {
                event.setMaxParticipants(eventDetails.getMaxParticipants());
            }
            if (eventDetails.getFacilities() != null) {
                event.setFacilities(eventDetails.getFacilities());
            }
            if (eventDetails.isIndividual()) {
                if (eventDetails.getIndividualParticipants() != null) {
                    event.setIndividualParticipants(eventDetails.getIndividualParticipants());
                    event.setTeamParticipants(null);
                }
            } else {
                if (eventDetails.getTeamParticipants() != null) {
                    event.setTeamParticipants(eventDetails.getTeamParticipants());
                    event.setIndividualParticipants(null);
                }
            }

            Event updatedEvent = eventRepository.save(event);
            return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        Optional<Event> event = eventRepository.findById(id);

        if (event.isPresent()) {
            eventRepository.delete(event.get());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
