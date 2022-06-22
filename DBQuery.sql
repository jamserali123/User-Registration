CREATE SCHEMA `person` ;
use person;
-- Need to add all other fields here
CREATE TABLE PERSON (
    id INT PRIMARY KEY auto_increment,
    person_id VARCHAR (100) NOT NULL,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    dob VARCHAR(20),
    email VARCHAR(50),
    father_firstName VARCHAR(20),
    father_lastName VARCHAR(20),
    mother_firstName VARCHAR(20),
    mother_lastName VARCHAR(20),
    gender VARCHAR(20),
    nationality varchar(20),
    street_address varchar(30),
    city varchar(20),
    country varchar(10),
    telephone varchar(12),
    mobile VARCHAR(20),



    -- # education Qualification page

    institute_name VARCHAR(50),
    hsc_board VARCHAR(20),
    ssc_board VARCHAR(20),
    hscBoard varchar(30),
    hsc_score VARCHAR(10),
    ssc_InsName VARCHAR(30),
    ssc_score VARCHAR(10),
    persue VARCHAR(30),
    c_insName VARCHAR(30),
    ovr_percent VARCHAR(10),
    backlog VARCHAR(10),

    




);

-- POST API call 
INSERT INTO PERSON(person_id,first_name,last_name,dob,email,mobile) 
VALUES ("1233445","Jamser","Ali","12-03-1992","jamser@gmail.com","94657845");

-- Patch Query 
UPDATE PERSON
SET institute_name = "abc ", hsc_board = "bsc",ssc_board="cbsc"
WHERE person_id="1233445";