package org.example.backend.Dto.Booking;

import lombok.Data;
import org.example.backend.Enums.BookingRequestEnums.Status;

import java.time.LocalDate;

@Data
public class BookingRequestDTO {

    private Long adSpaceId;
    private String advertiserName;
    private String advertiserEmail;
    private LocalDate startDate;
    private LocalDate endDate;
    private Status status;
    private Integer totalCost;

}