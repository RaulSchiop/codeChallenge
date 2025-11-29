package org.example.backend.Controller;


import org.example.backend.Dto.AdSpace.AdSpaceDTO;
import org.example.backend.Service.AdSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/ad-spaces")
public class AdSpaceController {

    private final AdSpaceService addSpaceService;

    @Autowired
    public AdSpaceController(AdSpaceService addSpaceService) {
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
