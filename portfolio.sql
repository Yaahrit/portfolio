use portfolio;

--@block
create TABLE contact(
     id VARCHAR(255) PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    project varchar(255),
    message varchar(255)
)

--@block
desc contact

--@block
drop table contact;