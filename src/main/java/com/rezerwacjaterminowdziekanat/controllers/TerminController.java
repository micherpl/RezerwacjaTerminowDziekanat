package com.rezerwacjaterminowdziekanat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.rezerwacjaterminowdziekanat.app.TerminRepository;
import com.rezerwacjaterminowdziekanat.models.Termin;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/terminy")
public class TerminController {

    private final TerminRepository terminRepository;

    @Autowired
    public TerminController(TerminRepository terminRepository){
        this.terminRepository = terminRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addTermin(@RequestBody Termin termin){
        terminRepository.save(termin);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Termin> getTerminy(){
        return terminRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET , params = "id")
    public Optional<Termin> getTermin(@RequestParam("id") Long id){
        return terminRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void deleteTermin(@RequestParam("id") Long id){
        terminRepository.deleteById(id);
    }

}
