package edu.asu.arajase3.activity2.controller;

import edu.asu.arajase3.activity2.data.AuthorEntity;
import edu.asu.arajase3.activity2.repo.AuthorRepo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
public class BookTownController {

    private final AuthorRepo authorRepo;

    public BookTownController(AuthorRepo authorRepo) {
        this.authorRepo = authorRepo;
    }


    @GetMapping("/booktown/list")
    public String listAuthors(Model model, @ModelAttribute("statusHint") String statusHint) {
        List<AuthorEntity> authors = authorRepo.findAll();
        model.addAttribute("controllerHint", "Listing page for Authors");
        model.addAttribute("authors", authors);
        model.addAttribute("author", new AuthorEntity());
        model.addAttribute("statusHint", statusHint);
        return "BookTown";
    }

    @PostMapping("/booktown/add")
    public String addAuthor(RedirectAttributes attributes, AuthorEntity authorEntity) {
        System.out.println(authorEntity.getFirstName() + " " + authorEntity.getLastName());
        try {
            authorRepo.save(authorEntity);
            attributes.addFlashAttribute("statusHint", "Added Author " + authorEntity.getFirstName() + " " + authorEntity.getLastName());
        } catch (Exception e) {
            attributes.addFlashAttribute("statusHint", "Error adding Author " + authorEntity.getFirstName() + " " + authorEntity.getLastName());
        }

        return "redirect:/booktown/list";
    }

    @GetMapping("/booktown/delete/{id}")
    public String deleteAuthor(RedirectAttributes attributes, @PathVariable("id") Integer id) {
        AuthorEntity authorEntity = authorRepo.findById(id).get();
        try {
            authorRepo.delete(authorEntity);
            attributes.addFlashAttribute("statusHint", "Deleted Author " + authorEntity.getFirstName() + " " + authorEntity.getLastName());
        } catch (Exception e) {
            attributes.addFlashAttribute("statusHint", "Error deleting Author " + authorEntity.getFirstName() + " " + authorEntity.getLastName());
        }

        return "redirect:/booktown/list";
    }
}
