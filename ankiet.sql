CREATE TABLE Ankieta
(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR2	DEFAULT NAME ,
surname VARCHAR2 DEFAULT SURNAME,
mail VARCHAR2	DEFAULT MAIL@MAIL.PL,
q1 VARCHAR2 NOT NULL,
q2 VARCHAR2 NOT NULL,
q3 VARCHAR2	NOT NULL
);