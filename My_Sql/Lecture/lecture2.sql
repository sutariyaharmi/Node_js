-- \sql
-- \connect root@localhost:3306
-- show databases;
-- use tables;

-- Insert data:

insert into user (firstname , lastname , age) values('harmi' , 'sutariya' , 18);

insert into user values('tejasvi' , 'gelani' , 19);

-- Multiple insert

insert into user (firstname , lastname , age)values ('bhargav' , 'vaghasiya' , 19); ('jagdish' , 'shiyal' , 22);


insert into user (firstname , age) values('trupti' , 38);



-- Read data:

select * from user;
select firstname from user;
select firstname , age from user;


-- repeat column 

select * , firstname from user;

-- merge column

select concat (firstname, " " , lastname)as"full name" , age from user;