package com.rezerwacjaterminowdziekanat.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Termin {

    @Id
    @GeneratedValue
    private Long id;

    private String nazwa;

    private String opis;

    private String email;

    private String data_pocz;

    private String data_kon;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getData_pocz() {
        return data_pocz;
    }

    public void setData_pocz(String data_pocz) {
        this.data_pocz = data_pocz;
    }

    public String getData_kon() {
        return data_kon;
    }

    public void setData_kon(String data_kon) {
        this.data_kon = data_kon;
    }
}
