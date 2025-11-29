package org.example.backend.Mapper.BookingRequestMapper;

import org.example.backend.Dto.Booking.BookingDTO;
import org.example.backend.Dto.Booking.BookingRequestDTO;
import org.example.backend.Entity.AdSpace;
import org.example.backend.Entity.BookingRequest;
import org.example.backend.Enums.BookingRequestEnums.Status;

public class BookingRequestMapper {

    // entity -> DTO
    public static BookingDTO toDto(BookingRequest bookingRequest) {
        BookingDTO dto = new BookingDTO();
        dto.setAdSpaceName(bookingRequest.getAdSpace().getName());
        dto.setAdvertiserName(bookingRequest.getAdvertiserName());
        dto.setStartDate(bookingRequest.getStartDate());
        dto.setEndDate(bookingRequest.getEndDate());
        dto.setStatus(bookingRequest.getStatus());
        dto.setTotalCost(bookingRequest.getTotalCost());
        return dto;
    }

 //dto -> entity
    public static BookingRequest toEntity(BookingRequestDTO dto, AdSpace adSpace) {
        BookingRequest entity = new BookingRequest();
        entity.setAdSpace(adSpace);
        entity.setAdvertiserName(dto.getAdvertiserName());
        entity.setAdvertiserEmail(dto.getAdvertiserEmail());
        entity.setStartDate(dto.getStartDate());
        entity.setEndDate(dto.getEndDate());
        entity.setStatus(Status.Pending);
        entity.setTotalCost(dto.getTotalCost());
        return entity;
    }
}
