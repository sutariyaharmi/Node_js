db.users.find({})


// match
  
db.users.find({"pages" : 234}) 

db.users.aggregate([{
    $match:{
        pages : 234
    }
}])

// project

db.users.find({} , {pages : 1 , author : 1 , title : 1 , _id : 0 })
db.users.find({}).project({ published : 0 , isbn : 0 })
db.users.find({}).select({description : 0 , published : 0 , isbn : 0 , _id : 0})

db.users.aggregate([{
    $project: {
        title:1,
        pages : 1 , 
        author : 1 ,
        _id : 0
    }
    },
    {
        $match : {pages:{$gte : 460}}
    },
])

db.users.aggregate([
     {
        $match :{title : "Speaking JavaScript"}
    },
    {
    $project: {
        // title : 1,
        pages : 1 , 
        author : 1 
    }
    },
])

// count

db.users.find({}).count();

db.users.aggregate([{
    $count: "count"
}])

//  skip and limit
  
  db.users.find({}).skip(3).limit(5)
  
db.users.aggregate([{
    $limit: 7
},
{
    $skip:2
},
])  
     
     db.users.aggregate([{
          $skip:2
        },
  {
  $limit: 7
  },
])  

// sort

db.users.find({}).sort({author : -1}) // desanting order

db.users.aggregate([{$sort:{subtitle : 1}}]) // asanding order


