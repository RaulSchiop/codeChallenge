package org.example.backend.Repository;

import org.example.backend.Entity.BookingRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface BookingRequestRepository extends JpaRepository<BookingRequest,Integer> {
    Optional<BookingRequest> findById(Long id);
}
