// mongosh

db.createCollection('Product_master');

// use Product_master;

// show collections;

db.createCollection('product');

db.product.insertMany([
    {
        "productNo" : "P00001",
        "Description" : "T-Shirts",
        "ProfitPercent" : 5,
        "UnitMeasure" : "Piece",
        "QtyOnHand" : 200,
        "ReorderLvI" : 50,
        "SellPrice" :350,
        "ConstPrice" : 250
    },
    {
        "productNo" : "P0345",
        "Description" : "Shirts",
        "ProfitPercent" : 6,
        "UnitMeasure" : "Piece",
        "QtyOnHand" : 150,
        "ReorderLvI" : 50,
        "SellPrice" :500,
        "ConstPrice" : 350
    },
    {
        "productNo" : "P06734",
        "Description" : "Cotton-jeans",
        "ProfitPercent" : 5,
        "UnitMeasure" : "Piece",
        "QtyOnHand" : 100,
        "ReorderLvI" : 20,
        "SellPrice" :600,
        "ConstPrice" : 450
    },
    {
        "productNo" : "P07865",
        "Description" : "Jeans",
        "ProfitPercent" : 5,
        "UnitMeasure" : "Piece",
        "QtyOnHand" : 100,
        "ReorderLvI" : 20,
        "SellPrice" :750,
        "ConstPrice" : 500
    },
    {
        "productNo" : "P07868",
        "Description" : "Trousers",
        "ProfitPercent" : 2,
        "UnitMeasure" : "Piece",
        "QtyOnHand" : 150,
        "ReorderLvI" : 50,
        "SellPrice" :850,
        "ConstPrice" : 550
    },
    {
        "productNo" : "P07885",
        "Description" : "Pull Overs",
        "ProfitPercent" : 2.5,
        "UnitMeasure" : "Piece",
        "QtyOnHand" : 80,
        "ReorderLvI" : 30,
        "SellPrice" :700,
        "ConstPrice" : 450
    },
    {
        "productNo" : "P07965",
        "Description" : "Denim Shirts",
        "ProfitPercent" : 4,
        "UnitMeasure" : "Piece",
        "QtyOnHand" : 100,
        "ReorderLvI" : 40,
        "SellPrice" :350,
        "ConstPrice" : 250
    }
]);


db.product.find();