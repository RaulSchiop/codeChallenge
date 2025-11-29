package org.example.backend.Repository;

import org.example.backend.Entity.AdSpace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AdSpaceRepository extends JpaRepository<AdSpace,Long> {
    Optional<AdSpace> findById(Long id);

}
