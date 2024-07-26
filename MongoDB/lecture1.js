// use dbName

// show dbs;
// show collections;

// db.createCollection('colllectionName');

// insert data into collection

// insertOne , insertMany

// db.users.insertOne({
//     "firstname" : "harmi",
//     "lastname" : "sutariya",
//     "email" : "harmi21@gmail.com",
//     "age" : 18
// })


// db.users.insertMany([
//     {
//         "firstname" : "harmi",
//         "lastname" : "sutariya",
//         "email" : "harmi21@gmail.com",
//         "age" : 18
//     },
//     {
//         "firstname" : "bhargav",
//         "lastname" : "vaghasiya",
//         "study" : "CA",
//         "age" : 19
//     },
//     {
//         "firstname" : "tejasvi",
//         "lastname" : "gelani",
//        "hobbies": ["singing" , "dancing"]
//     },
// ])



// find

// db.users.find({"study" : "CA"});    // find multiple
// db.users.findOne({"study" : "CA"}); // find any one


