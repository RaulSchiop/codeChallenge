package org.example.backend.Service;


import org.example.backend.Dto.Booking.BookingDTO;
import org.example.backend.Entity.AdSpace;
import org.example.backend.Entity.BookingRequest;
import org.example.backend.Enums.BookingRequestEnums.Status;
import org.example.backend.Mapper.BookingRequestMapper.BookingRequestMapper;
import org.example.backend.Repository.AdSpaceRepository;
import org.example.backend.Repository.BookingRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingRequestService {
    private final BookingRequestRepository bookingRequestRepository;
    private final AdSpaceRepository adSpaceRepository;

    @Autowired
    public BookingRequestService(BookingRequestRepository bookingRequestRepository, AdSpaceRepository adSpaceRepository) {
        this.bookingRequestRepository = bookingRequestRepository;
        this.adSpaceRepository = adSpaceRepository;
    }


    public ResponseEntity<List<BookingDTO>> getBookingRequests() {
        List<BookingRequest> bookingRequests = bookingRequestRepository.findAll();

        List<BookingDTO> dtos = bookingRequests.stream()
                .map(BookingRequestMapper::toDto)
                .toList();

        return ResponseEntity.ok(dtos);
    }


    public ResponseEntity<BookingRequest> addBookingRequest(BookingRequest bookingRequest) {
        try {
            if (bookingRequest.getId() != null &&
                    bookingRequestRepository.findById(bookingRequest.getId()).isPresent()) {
                return ResponseEntity.status(409).body(bookingRequest);
            }


            AdSpace adSpace = adSpaceRepository.findById(bookingRequest.getAdSpace().getId())
                    .orElseThrow(() -> new RuntimeException("AdSpace not found"));


            bookingRequest.setAdSpace(adSpace);


            BookingRequest savedRequest = bookingRequestRepository.save(bookingRequest);


            adSpace.getBookings().add(savedRequest);
            adSpaceRepository.save(adSpace);

            return ResponseEntity.ok(savedRequest);

        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }


    public ResponseEntity<BookingRequest> getBookingRequestById(long id) {

        return bookingRequestRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body(null));

    }


    public ResponseEntity<BookingRequest> approveBookingRequest(long id) {

        Optional<BookingRequest> optionalBooking = bookingRequestRepository.findById(id);


        if (optionalBooking.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        BookingRequest booking = optionalBooking.get();
        booking.setStatus(Status.Approved);

        BookingRequest updatedBooking = bookingRequestRepository.save(booking);

        return ResponseEntity.ok(updatedBooking);
    }


    public ResponseEntity<BookingRequest> rejectBookingRequest(long id) {

        Optional<BookingRequest> optionalBooking = bookingRequestRepository.findById(id);


        if (optionalBooking.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        BookingRequest booking = optionalBooking.get();
        booking.setStatus(Status.Rejected);

        BookingRequest updatedBooking = bookingRequestRepository.save(booking);

        return ResponseEntity.ok(updatedBooking);
    }

}
