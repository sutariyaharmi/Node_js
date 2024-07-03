-- \sql
-- \connect root@localhost:3306
-- show databases;
-- create database users;
-- use users;

 create table students(Firstname varchar(10) , lastname varchar(10) , Age int(3) , City varchar(10) , Maths int(3) , Eng int(3) , Guj int(3));

--  desc students;

insert into students values
     ('Harmi' , 'Sutariya' , 19 , 'Surat' , 98 , 99 , 97),
     ('Tejasvi' , 'Gelani' , 20 , 'Amreli' , 92 , 93 , 94),
     ('Bhargav' , 'Vaghasiya' , 19 , 'Surat' , 98 , 98 , 98),
     ('Trupti' , 'Gajera' , 37 , 'Amreli' , 80 , 81 , 82),
     ('Jagdish' , 'Siyal' , 42 , 'Surat' , 98 , 99 , 97),
     ('Dev' , 'Bharadva' , 20 , 'Junagadh' , 48 , 40 , 42),
     ('Harshit' , 'Kakadiya' , 30 , 'Junagadh' , 48 , 40 , 42),
     ('Prince' , 'Bodar' , 21 , 'Bhavnagar' , 50 , 30 , 40),
     ('Aryan' , 'Sutariya' , 21 , 'Bhavnagar' , 99 , 95 , 97),
     ('Aesha' , 'Kotadiya' , 23 , 'Mauva' , 77 , 89 , 97);

    --  select * from students;


-- AND Opera

    select * from students where City = "Surat" AND Maths = 98;

-- OR Opera
    
    select * from students where Age=42 OR Eng=55;

-- Between Opera

   select * from students where Guj between 90 and 99;
   select * from students where Maths between 70 and 80;


-- In Opera

  select * from students where City in ("Surat" , "Mauva");

--   Not in opera

  select * from students where City Not in ("Surat" , "Mauva"); 

--   limit

select * from students limit 5;

select City , Maths from students limit 5;