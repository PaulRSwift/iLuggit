package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by VeryBarry on 11/16/16.
 */
@Entity
@Table(name = "trucks")
public class Truck {
    public enum BedSize{
        ONE, TWO, THREE
    }

    @Id
    @GeneratedValue
    public int id;
    @Column(nullable = false, unique = true)
    String username;
    @Column(nullable = false)
    String password;
    @Column(nullable = false)
    String first_name;
    @Column(nullable = false)
    String last_name;
    @Column(nullable = false, unique = true)
    String email;
    @Column(nullable = false)
    String phone_number;
    @Column
    BedSize bedSize;

    public Truck() {
    }

    public Truck(String username, String password, String first_name, String last_name, String email, String phone_number, BedSize bedSize) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.bedSize = bedSize;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public BedSize getBedSize() {
        return bedSize;
    }

    public void setBedSize(BedSize bedSize) {
        this.bedSize = bedSize;
    }
}
