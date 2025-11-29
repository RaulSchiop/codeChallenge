package org.example.backend.Controller;
import org.example.backend.Dto.Booking.BookingDTO;
import org.example.backend.Dto.Booking.BookingRequestDTO;
import org.example.backend.Entity.BookingRequest;
import org.example.backend.Service.BookingRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<List<BookingDTO>> getBookingRequests() {

        return bookingRequestService.getBookingRequests();
    }

    //POST /api/v1/booking-requests
    @PostMapping()
    public ResponseEntity<?> addBookingRequest(@RequestBody BookingRequestDTO bookingRequest) {

        return bookingRequestService.addBookingRequest(bookingRequest);

    }


    //GET /api/v1/booking-requests/{id}
    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingRequestById(@PathVariable("id") long id) {

        return bookingRequestService.getBookingRequestById(id);
    }

    //PATCH /api/v1/booking-requests/{id}/approve
    @PatchMapping("/{id}/approve")
    public ResponseEntity<?> approveBookingRequest(@PathVariable("id") long id) {

        return bookingRequestService.approveBookingRequest(id);
    }

    //PATCH /api/v1/booking-requests/{id}/reject
    @PatchMapping("/{id}/reject")
    public ResponseEntity<?> rejectBookingRequest(@PathVariable("id") long id) {

        return bookingRequestService.rejectBookingRequest(id);
    }

}
