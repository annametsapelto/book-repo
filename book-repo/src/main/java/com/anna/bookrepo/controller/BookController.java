package com.anna.bookrepo.controller;

import com.anna.bookrepo.model.Book;
import com.anna.bookrepo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/book")
@SpringBootApplication(scanBasePackages = "com.anna.bookrepo.service")
public class BookController {
    @Autowired
    private BookService bookService;

    @PostMapping("/addBook")
    public String addBook(@RequestBody Book book) {
        bookService.saveBook(book);
        return "New book is added";
    }

    @GetMapping("getAll")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/get/{id}")
    public Optional<Book> getBook(Integer id) {
        return bookService.getBookById(id);
    }

}
