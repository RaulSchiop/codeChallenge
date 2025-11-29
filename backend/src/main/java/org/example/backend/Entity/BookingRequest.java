package org.example.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;
import org.example.backend.Enums.BookingRequestEnums.Status;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
public class BookingRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ad_space_id")
    private AdSpace adSpace;

    @Column(nullable = false)
    private String advertiserName;

    @Column(nullable = false)
    private String advertiserEmail;

    @Column(nullable = false)
    private LocalDate startDate;

    @Column(nullable = false)
    private LocalDate endDate;

    @Column(nullable = false)
    private Status status;

    @Column(nullable = false)
    private Integer totalCost;

    @CreationTimestamp
    private LocalDateTime createdAt;

}
