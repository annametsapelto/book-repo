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
@CrossOrigin
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
    public Optional<Book> getBook(@PathVariable Integer id) {
        return bookService.getBookById(id);
    }

    @PutMapping("/{id}")
    public Book updateBook(@RequestBody Book newBook, @PathVariable Integer id) {
        bookService.delete(id);
        newBook.setId(id);
        return bookService.updateBook(newBook);
    }

    @DeleteMapping("delete/{id}")
    public String delete(@PathVariable Integer id) {
        bookService.delete(id);
        return "Removed book with id " + id;
    }


}
