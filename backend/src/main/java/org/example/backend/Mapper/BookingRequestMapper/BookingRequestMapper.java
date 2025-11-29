package org.example.backend.Mapper.BookingRequestMapper;

import org.example.backend.Dto.Booking.BookingDTO;
import org.example.backend.Entity.BookingRequest;

public class BookingRequestMapper {

    public static BookingDTO toDto(BookingRequest bookingRequest){

        BookingDTO dto = new BookingDTO();
        dto.setAdSpaceName(bookingRequest.getAdSpace().getName());
        dto.setAdvertiserName(bookingRequest.getAdvertiserName());
        dto.setStartDate(bookingRequest.getStartDate());
        dto.setEndDate(bookingRequest.getEndDate());
        dto.setStatus(bookingRequest.getStatus());
        dto.setTotalCost(bookingRequest.getTotalCost());

        return dto;
    }




}
