package com.rezerwacjaterminowdziekanat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.rezerwacjaterminowdziekanat.app.TerminRepository;
import com.rezerwacjaterminowdziekanat.models.Termin;

import java.util.List;

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

}
