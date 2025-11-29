package org.example.backend.Dto.AdSpace;

import lombok.Data;
import org.example.backend.Enums.AdSpaceEnums.Availability;
import org.example.backend.Enums.AdSpaceEnums.Type;
import org.example.backend.Enums.BookingRequestEnums.Status;

@Data
public class AdSpaceDTO {

    private Long id;
    private String name;
    private Type type;
    private String location;
    private Float pricePerDay;
    private Availability availability;


}
