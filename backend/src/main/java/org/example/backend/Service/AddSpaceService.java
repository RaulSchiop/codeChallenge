package org.example.backend.Service;

import org.example.backend.Dto.AdSpace.AdSpaceDTO;
import org.example.backend.Entity.AdSpace;
import org.example.backend.Mapper.AdSpaceMapper.AdSpaceMapper;
import org.example.backend.Repository.AdSpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class AddSpaceService {

    private final AdSpaceRepository adSpaceRepository;

    @Autowired
    public AddSpaceService(AdSpaceRepository adSpaceRepository) {
        this.adSpaceRepository = adSpaceRepository;
    }


    public ResponseEntity<List<AdSpaceDTO>> getAdSpaces() {
        List<AdSpace> adSpaces = adSpaceRepository.findAll();
        List<AdSpaceDTO> dtos=adSpaces.stream()
                .map(AdSpaceMapper::toDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }


    public ResponseEntity<AdSpaceDTO> getAdSpaceById( long id) {

        return adSpaceRepository.findById(id)
                .map(adSpace -> ResponseEntity.ok().body(AdSpaceMapper.toDTO(adSpace)))
                .orElseGet(() -> ResponseEntity.status(404).body(null));

    }

}
