package edu.asu.arajase3.activity3.controller;

import edu.asu.arajase3.activity3.domain.PhoneBook;
import edu.asu.arajase3.activity3.domain.PhoneCreate;
import edu.asu.arajase3.activity3.domain.PhoneEntry;
import edu.asu.arajase3.activity3.domain.PhoneUpdate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class PhoneBookController {

    /**
     * The below Variable pre-creates a set of phonebooks and acts as a local database.
     */
    private List<PhoneBook> phoneBookList = new ArrayList<PhoneBook>(){
        {
            add(new PhoneBook(123, "New York", "2018"));
            add(new PhoneBook(456, "New Jersey", "2018"));
            add(new PhoneBook(789, "New Mexico", "2018"));
        }
    };


    /**
     * Retrieve a specific PhoneEntry based on a phone number
     * Uses a GET Method with below param
     * @param phoneNumber
     * @return PhoneEntry Object
     */
    @GetMapping("/getPhoneEntry")
    public ResponseEntity<PhoneEntry>  getPhoneEntry (@RequestParam("phoneNumber") String phoneNumber) {
        var phoneBookEntry = phoneBookList.stream().filter(phoneBook -> phoneBook.getAreaCode().toString().equals(phoneNumber.substring(0,2))).findFirst().get();
        var phoneEntry = phoneBookEntry.getPhoneEntry().stream().filter(entry -> entry.getPhoneNumber().equals(phoneNumber.substring(3,9))).findFirst().get();

        return ResponseEntity.ok(phoneEntry);
    }

    /**
     * Retrieve a specific PhoneBook based on a area code
     * Uses a POST Method with below param
     * @param PhoneCreate Object
     * @return String and a valid HTTP CODE explaining if the resource was created or not.
     */

    @PostMapping("/createPhoneEntry")
    public ResponseEntity<String> createPhoneEntry(@RequestBody PhoneCreate phoneCreate) {

        var phoneBook = phoneBookList.stream().filter(pBook -> pBook.getAreaCode().toString().equals(phoneCreate.getPhoneNumber().substring(0,2))).findFirst();
        if (phoneBook.isPresent()) {
            var pEnt = phoneBook.get().getPhoneEntry().stream().filter(pEntry -> pEntry.getPhoneNumber().equals(phoneCreate.getPhoneNumber().substring(3,9))).findFirst();
            if (pEnt.isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Phone Entry already exists");
            } else {
                phoneBook.get().addPhoneEntry(phoneCreate.getPhoneEntry());
                return ResponseEntity.ok("Phone Entry created");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Phone Book Doesn't exist");
        }

    }

    /**
     * Update a specific PhoneEntry based on a phone number
     * Uses a PUT Method with below param
     * @param PhoneUpdate Object
     * @return String and a valid HTTP CODE explaining if the resource was updated or not.
     */
    @PutMapping("/updatePhoneEntry")
    public ResponseEntity<String> updatePhoneEntry(@RequestBody PhoneUpdate phoneUpdate) {
        var phoneBookEntry = phoneBookList.stream().filter(phoneBook -> phoneBook.getAreaCode().toString().equals(phoneUpdate.getOldPhoneNumber().substring(0,2))).findFirst();
        if (phoneBookEntry.isPresent()) {
            var phoneEntry = phoneBookEntry.get().getPhoneEntry().stream().filter(entry -> entry.getPhoneNumber().equals(phoneUpdate.getOldPhoneNumber().substring(3,9))).findFirst();
            if (phoneEntry.isPresent() && phoneUpdate.getOldPhoneNumber().substring(0,2).equals(phoneUpdate.getNewPhoneNumber().substring(0,2))) {
                phoneEntry.get().setPhoneNumber(phoneUpdate.getNewPhoneNumber().substring(3,9));
            } else if (phoneEntry.isPresent() && !(phoneUpdate.getOldPhoneNumber().substring(0,2).equals(phoneUpdate.getNewPhoneNumber().substring(0,2)))) {
                phoneBookEntry.get().getPhoneEntry().remove(phoneEntry.get());
                var newPhoneBookEntry = phoneBookList.stream().filter(phoneBook -> phoneBook.getAreaCode().toString().equals(phoneUpdate.getNewPhoneNumber().substring(0,2))).findFirst();
                if (newPhoneBookEntry.isPresent()) {
                    newPhoneBookEntry.get().addPhoneEntry(phoneEntry.get());
                } else {
                    return ResponseEntity.status(HttpStatus.NO_CONTENT).body("New Phone Number Doesn't have a Phone Book");
                }
            } else {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Entered Old Phone Entry Doesn't exist");
            }
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Entered Old Phone Book Doesn't exist");
    }

    /**
     * Get all the PhoneBooks
     * Uses a GET Method with no params
     * @return PhoneBook Object List
     */
    @GetMapping("/getAllPhoneBook")
    public ResponseEntity<List<PhoneBook>> getAllPhoneBooks() {
        return ResponseEntity.ok(phoneBookList);
    }

    /**
     * Get all the PhoneBook by AreaCode
     * Uses a GET Method with below param
     * @param areaCode
     * @return PhoneBook Object
     */
    @GetMapping("/getPhoneBookByAreaCode")
    public ResponseEntity<PhoneBook>  getPhoneBook (@RequestParam("areaCode") String areaCode) {
        var phoneBook = phoneBookList.stream().filter(pBook -> pBook.getAreaCode().toString().equals(areaCode)).findFirst().get();
        return ResponseEntity.ok(phoneBook);
    }

    /**
     * Get Phone ENtry by AreaCode and PhoneNumber
     * Uses a GET Method with below param
     * @param areaCode, firstName, lastName
     * @return A list of PhoneEntry Object
     */
    @GetMapping("/getPhoneEntryByFirstLastSubString/{areaCode}")
    public ResponseEntity<List<PhoneEntry>>  getPhoneEntryByFirstLastSubString (@PathVariable("areaCode") String areaCode, @RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName) {
        var phoneBook = phoneBookList.stream().filter(pBook -> pBook.getAreaCode().toString().equals(areaCode)).findFirst().get();
        var phoneEntryList = phoneBook.getPhoneEntry().stream().filter(pEntry -> pEntry.getFirstName().contains(firstName)
                || pEntry.getLastName().contains(lastName)
                || (pEntry.getFirstName().contains(firstName) && pEntry.getLastName().contains(lastName))).toList();
        return ResponseEntity.ok(phoneEntryList);
    }

    /**
     * Delete a specific PhoneEntry based on a phone number
     * @param phoneNumber
     * @return String and a valid HTTP CODE explaining if the resource was deleted or not.
     */
    @DeleteMapping("/deletePhoneEntry")
    public ResponseEntity<PhoneBook> deletePhoneEntry(@RequestParam("phoneNumber") String phoneNumber) {
        var phoneBook = phoneBookList.stream().filter(pBook -> pBook.getAreaCode().toString().equals(phoneNumber.substring(0,2))).findFirst().get();
        var phoneEntry = phoneBook.getPhoneEntry().stream().filter(pEntry -> pEntry.getPhoneNumber().equals(phoneNumber.substring(3,9))).findFirst().get();
        phoneBook.getPhoneEntry().remove(phoneEntry);
        return ResponseEntity.ok(phoneBook);
    }
}
