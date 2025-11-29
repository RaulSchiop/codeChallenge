package org.example.backend.Repository;

import org.example.backend.Entity.AddSpace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AdSpaceRepository extends JpaRepository<AddSpace,Integer> {
}
