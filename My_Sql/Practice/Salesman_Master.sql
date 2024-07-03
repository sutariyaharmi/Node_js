-- \sql
-- \connect root@localhost:3306
-- show databases;

create table salesman(SalesmanNo varchar(6) , SalesmanName varchar(20) , Address1 varchar(30) , Address2 varchar(30) , City varchar(20) , PinCode int(8) , Stat  varchar(20) , Salamt int(8) , Tgttoget int(6) , Ytdsales int(6) , ReMarks varchar(60));

insert into salesman values('S00001' , 'Aman' , 'A/14' , 'Worli' , 'Mumbai' , 400002 , 'Maharastra' , 3000 , 100 , 50 , 'Good');

insert into salesman values('S00002' , 'Omkar' , '65' , 'Nariman' , 'Mumbai' , 400001 , 'Maharastra' , 3000 , 200 , 100 , 'Good');

insert into salesman values('S00003' , 'Raj' , 'p-7' , 'Bandra' , 'Mumbai' , 400032 , 'Maharastra' , 3000 , 200 , 100 , 'Good');

insert into salesman values('S00004' , 'Ashish' , 'A/5' , 'juhu' , 'Mumbai' , 400044 , 'Maharastra' , 3500 , 200 , 150 , 'Good');

-- select * from salesman;