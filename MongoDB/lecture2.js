

//  update

db.users.updateOne({firstname : 'tejasvi'} , {$set:{gender:"Female"}} , {upsert : true})

db.users.updateMany({} , {$set:{course : "web"}} , {upsert : true})

db.users.updateMany({} , {$unset:{course : ""}} , {upsert : true})
  
db.users.updateOne({lastname : 'sutariya'} ,{$rename : { "lastname" : "secondname"}} , {upset : true})

db.users.updateMany({} , {$inc:{"age" : 20}} , {upsert : true});

db.users.updateOne({lastname : 'gelani'} ,{$addToSet : { "hobbies" : "Reading"}} , {upset : true})

db.users.updateOne({lastname : 'gelani'} ,{$pop : { "hobbies" : -1}} , {upset : true});

// db.users.updateOne({lastname : 'Shiyal'} ,{$pull : {passion :{$in : ["developer" , "singer" , "dancer"]} , hobbies :"singer"}} , {upset : true});

db.users.updateOne({lastname : 'gelani'} ,{$push: { "hobbies" : "acting"}} , {upset : true});






// delete 

db.users.deleteOne({firstname : 'tejasvi'});

db.users.deleteOne({_id :  ObjectId('6694a35d80d47d2936c4e49c')});

db.users.deleteMany({});

db.users.drop();

db.dropDatabase('info');