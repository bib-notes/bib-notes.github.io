CREATE TABLE VERSION(
ID INTEGER NOT NULL UNIQUE,
NAME CHAR(255) NOT NULL,
CODE CHAR(4) NOT NULL,
PRIMARY KEY(ID)
);
CREATE TABLE CHAPTER(
ID INTEGER NOT NULL UNIQUE,
NUM INTEGER NOT NULL,
BOOK_ID INTEGER NOT NULL,
PRIMARY KEY(ID);
);
CREATE TABLE CATEGORY(
ID INTEGER NOT NULL 
);