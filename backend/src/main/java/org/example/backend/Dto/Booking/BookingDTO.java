package org.example.backend.Dto.Booking;

import lombok.Data;
import org.example.backend.Enums.BookingRequestEnums.Status;

import java.time.LocalDate;

@Data
public class BookingDTO {

    private Long id;
    private String adSpaceName;
    private String advertiserName;
    private LocalDate startDate;
    private LocalDate endDate;
    private Status status;
    private Integer totalCost;


}


