package com.anna.bookrepo.service;

import com.anna.bookrepo.model.Book;
import com.anna.bookrepo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    private BookRepository repo;

    @Override
    public Book saveBook(Book book) {
        return repo.save(book);
    }

    @Override
    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    @Override
    public Optional <Book> getBookById(Integer id) {
        return repo.findById(id);
    }

    @Override
    public String delete(Integer id) {
        repo.deleteById(id);
        return "Book was deleted";
    }

}
