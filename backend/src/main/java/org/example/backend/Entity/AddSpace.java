package org.example.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import org.example.backend.Enums.AdSpaceEnums.Availability;
import org.example.backend.Enums.AdSpaceEnums.Type;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class AddSpace {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Type type;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private Integer pricePerDay;

    @Column(nullable = false)
    private Availability status;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "adSpace", cascade = CascadeType.ALL)
    private List<BookingRequest> bookings;

}
