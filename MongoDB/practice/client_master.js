// mongosh

// use Client_master

// show dbs;

// show collections;

// db.createCollection('client');

db.client.insertMany([
    {
        "ClientNO" : "C00001",
        "Name" : "Ivan Bayross",
        "City" : "Mumbai",
        "Pincode" : 400054,
        "State" : "Maharashtra",
        "BalDue" : 15000
    },
    {
        "ClientNO" : "C00002",
        "Name" : "Mamta Mazumdar",
        "City" : "Madras",
        "Pincode" : 780001,
        "State" : "Tamil Nadu",
        "BalDue" :0
    },
    {
        "ClientNO" : "C00003",
        "Name" : "Chhaya Bankar",
        "City" : "Mumbai",
        "Pincode" : 400057,
        "State" : "Maharashtra",
        "BalDue" : 5000
    },
    {
        "ClientNO" : "C00004",
        "Name" : "Ashwini joshi",
        "City" : "Bangalore",
        "Pincode" : 560001,
        "State" : "Karnataka",
        "BalDue" :0
    },
    {
        "ClientNO" : "C00005",
        "Name" : "Hansel Colaco",
        "City" : "Mumbai",
        "Pincode" : 400060,
        "State" : "Maharashtra",
        "BalDue" : 2000
    },
    {
        "ClientNO" : "C00006",
        "Name" : "Deepak Sharma",
        "City" : "Banglore",
        "Pincode" : 560050,
        "State" : "Karnataka",
        "BalDue" : 0
    }
]);