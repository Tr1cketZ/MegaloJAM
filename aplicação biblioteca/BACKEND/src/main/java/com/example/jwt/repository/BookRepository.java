
    package com.example.jwt.repository;

    import com.example.jwt.entity.Book;
    import org.springframework.data.jpa.repository.JpaRepository;

    public interface BookRepository extends JpaRepository<Book, Long> {
    }
    