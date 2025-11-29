package org.example.backend.Controller;
import org.example.backend.Entity.BookingRequest;
import org.example.backend.Service.BookingRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/booking-requests")
public class BookingRequestController {

    private final BookingRequestService bookingRequestService;

    @Autowired
    public BookingRequestController(BookingRequestService bookingRequestService) {
        this.bookingRequestService = bookingRequestService;
    }


    //GET /api/v1/booking-requests
    @GetMapping()
    public ResponseEntity<List<BookingRequest>> getBookingRequests() {
        //dummy for now
        return ResponseEntity.ok().build();
    }

    //POST /api/v1/booking-requests
    @PostMapping()
    public ResponseEntity<?> addBookingRequest(@RequestBody BookingRequest bookingRequest) {
        //dummy for now
        return ResponseEntity.ok().build();

    }


    //GET /api/v1/booking-requests/{id}
    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingRequestById(@PathVariable("id") String id) {
        //dummy for now
        return ResponseEntity.ok().build();
    }

    //PATCH /api/v1/booking-requests/{id}/approve
    @PatchMapping("/{id}/approve")
    public ResponseEntity<?> approveBookingRequest(@PathVariable("id") String id) {
        //dummy for now
        return ResponseEntity.ok().build();
    }

    //PATCH /api/v1/booking-requests/{id}/reject
    @PatchMapping("/{id}/reject")
    public ResponseEntity<?> rejectBookingRequest(@PathVariable("id") String id) {
        //dummy for now
        return ResponseEntity.ok().build();
    }

}
