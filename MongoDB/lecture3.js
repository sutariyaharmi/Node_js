db.users.find({"pages" : {$eq : 472}}) // equal to

db.users.find({"pages" : {$ne : 472}}) //not equal

db.users.find({"pages" : {$gt : 472}}) // greater than

db.users.find({"pages" : {$gte : 472}}) // greater than or equal

db.users.find({"pages" : {$lt : 472}}) // less than

db.users.find({"pages" : {$lte : 472}}) // less than or equal

db.users.find({"pages" : {$in : [472 , 460 , 352]}})  // in

db.users.find({"pages" : {$nin : [472 , 460 , 352]}}) // not in

db.users.find({$and : [{"pages" : 254} , {"author" : "Addy Osmani"}]}) // and opera

db.users.find({$or: [{"pages" : 254} , {"author" : "Addy Osmani"}]}) // or opera

db.users.find({$nor : [{"pages" : 254} , {"author" : "Addy Osmani"}]}) // not or opera

db.users.find({"author" : {$not : {$eq :"Kyle Simpson" }}}) // not equal opera

