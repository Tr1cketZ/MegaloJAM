CREATE TABLE Usuario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE Livro (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    isbn VARCHAR(13) NOT NULL UNIQUE,
    numeroExemplares INT NOT NULL
);

INSERT INTO Usuario (nome, email, senha, role) 
VALUES ('Viktor', 'viktor@email.com', 'senha123', 'admin');

INSERT INTO Usuario (nome, email, senha, role) 
VALUES ('Murilovsky', 'murilo@email.com', 'senha123', 'user');

INSERT INTO Livro (titulo, autor, isbn, numeroExemplares) 
VALUES ('O Senhor dos Anéis', 'J.R.R. Tolkien', '9780544003415', 10);
