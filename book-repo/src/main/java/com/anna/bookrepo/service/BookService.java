package com.anna.bookrepo.service;

import com.anna.bookrepo.model.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    public Book saveBook(Book book);

    public List<Book> getAllBooks();

    public Optional<Book> getBookById(Integer id);

    public String delete(Integer id);
}
