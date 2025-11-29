package org.example.backend.Controller;


import org.example.backend.Dto.AdSpace.AdSpaceDTO;
import org.example.backend.Entity.AdSpace;
import org.example.backend.Service.AddSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/ad-spaces")
public class AdSpaceController {

    private final AddSpaceService addSpaceService;

    @Autowired
    public AdSpaceController(AddSpaceService addSpaceService) {
        this.addSpaceService = addSpaceService;
    }

    //GET /api/v1/ad-spaces
    @GetMapping()
    public ResponseEntity<List<AdSpaceDTO>> getAdSpaces() {

        return addSpaceService.getAdSpaces();
    }


    //GET /api/v1/ad-spaces/{id}
    @GetMapping("/{id}")
    public ResponseEntity<AdSpaceDTO> getAdSpaceById( @PathVariable long id) {

        return addSpaceService.getAdSpaceById(id);
    }

}
