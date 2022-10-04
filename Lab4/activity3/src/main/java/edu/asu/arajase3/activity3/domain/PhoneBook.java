package edu.asu.arajase3.activity3.domain;

import java.util.ArrayList;
import java.util.List;

public class PhoneBook {

    private Integer areaCode;
    private String location;
    private String year;

    private List<PhoneEntry> phoneEntry = new ArrayList<>();


    public PhoneBook(Integer areaCode, String location, String year) {
        this.areaCode = areaCode;
        this.location = location;
        this.year = year;
    }

    public Integer getAreaCode() {
        return areaCode;
    }

    public void setAreaCode(Integer areaCode) {
        this.areaCode = areaCode;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public List<PhoneEntry> getPhoneEntry() {
        return phoneEntry;
    }

    public void addPhoneEntry(PhoneEntry phoneEntry) {
        this.phoneEntry.add(phoneEntry);
    }
}
