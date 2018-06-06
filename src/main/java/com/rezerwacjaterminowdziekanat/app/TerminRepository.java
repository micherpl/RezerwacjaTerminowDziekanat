package com.rezerwacjaterminowdziekanat.app;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rezerwacjaterminowdziekanat.models.Termin;

public interface TerminRepository extends JpaRepository<Termin, Long> {
}
