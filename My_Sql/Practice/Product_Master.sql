-- \sql

-- \connect root@localhost:3306
-- show database;
-- create database productmaster;
-- use productmaster;

create table product (productNo varchar(6) , Description varchar(15) , Profitpercent int(4) , Unitmeasure varchar(10) , QtyOnHand int(8) , ReorDerLVL int(8) , SellPrice int(8) , CostPrice int(8));

insert into product values('P00001' , 'T-shirts' , 5 , 'Piece' , 200 , 50 , 350 , 250);

insert into product values('P0345' , 'Shirts' , 6 , 'Piece' , 150 , 50 , 500 , 350);

insert into product values('P06734' , 'Cotton Jeans' , 5 , 'Piece' , 100 , 20 , 600 , 450);

insert into product values('P07865' , 'Jeans' , 5 , 'Piece' , 100 , 20 , 750 , 500);

insert into product values('P07868' , 'Trousers' , 2 , 'Piece' , 150 , 50 , 850 , 550);

insert into product values('P07885' , 'Pull Overs' , 3 , 'Piece' , 80 , 30 , 700 , 450);

insert into product values('P07965' , 'Denim Shirts' , 4 , 'Piece' , 100 , 40 , 350 , 250);

insert into product values('P07975' , 'Lycra Tops' , 5 , 'Piece' , 70 , 30 , 300 , 175);

insert into product values('P08865' , 'Skirts' , 5 , 'Piece' , 75 , 30 , 450 , 300);

-- select * from product;