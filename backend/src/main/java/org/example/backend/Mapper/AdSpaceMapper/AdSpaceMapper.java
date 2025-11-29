package org.example.backend.Mapper.AdSpaceMapper;

import org.example.backend.Dto.AdSpace.AdSpaceDTO;
import org.example.backend.Entity.AdSpace;

public class AdSpaceMapper {
    public static AdSpaceDTO toDTO(AdSpace adSpace){
        AdSpaceDTO dto = new AdSpaceDTO();
        dto.setId(adSpace.getId());
        dto.setName(adSpace.getName());
        dto.setLocation(adSpace.getLocation());
        dto.setPricePerDay(adSpace.getPricePerDay());
        dto.setType(adSpace.getType());
        return dto;
    }
}
