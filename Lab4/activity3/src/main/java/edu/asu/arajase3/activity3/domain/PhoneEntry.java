package edu.asu.arajase3.activity3.domain;

public class PhoneEntry {
    private String phoneNumber;
    private String lastName;
    private String firstName;

    public PhoneEntry(String phoneNumber, String lastName, String firstName) {
        this.phoneNumber = phoneNumber;
        this.lastName = lastName;
        this.firstName = firstName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
}
