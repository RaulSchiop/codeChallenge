package org.example.backend.Service;

import org.example.backend.Entity.AdSpace;
import org.example.backend.Repository.AdSpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class AddSpaceService {

    private final AdSpaceRepository adSpaceRepository;

    @Autowired
    public AddSpaceService(AdSpaceRepository adSpaceRepository) {
        this.adSpaceRepository = adSpaceRepository;
    }


    public ResponseEntity<List<AdSpace>> getAdSpaces() {
        List<AdSpace> adSpaces = adSpaceRepository.findAll();
        return ResponseEntity.ok(adSpaces);
    }


    public ResponseEntity<?> getAdSpaceById( long id) {

        return adSpaceRepository.findById(id)
                .map(adSpace -> ResponseEntity.ok().body(adSpace))
                .orElseGet(() -> ResponseEntity.status(404).build());

    }

}
