
// group

db.users.aggregate([
        {
          $group: { _id: "$pages",
              total:{
                  $sum:1
              },
          }
        }
    ])


    // group details add 
        
    db.users.aggregate([
        {
           $group: { _id: "$pages",
              total:{
                  $sum:1
              },
              details:{
                  $push:{
                      title:"$title"
                  }
              }
           }
        }
    ])
    
    
    // db.students.insertMany([
    //         {
    //             "studentId": "std001",
    //             "stuName": "Magan",
    //             "course": "Full-stack",
    //             "faculty": "tea002"
    //         },
    //         {
    //             "studentId": "std002",
    //             "stuName": "Chhagan",
    //             "course": "python-stack",
    //             "faculty": "tea003"
    //         },
    //         {
    //             "studentId": "std003",
    //             "stuName": "Gagan",
    //             "course": "Android Development",
    //             "faculty": "tea001"
    //         },
    //         {
    //             "studentId": "std004",
    //             "stuName": "Raman",
    //             "course": "iOS Development",
    //             "faculty": "tea002"
    //         },
    //         {
    //             "studentId": "std005",
    //             "stuName": "Chaman",
    //             "course": "UI/UX Designer",
    //             "faculty": "tea001"
    //         },
    //         ])
        
    //     db.teachers.insertMany([
    //         {
    //             "teacherId": "tea001",
    //             "teacherName": "Nikhil",
    //             "hobbies": ["marketing", 'developement']
    //         },
    //         {
    //             "teacherId": "tea002",
    //             "teacherName": "Jayn",
    //             "hobbies": ["management", 'time pass']
    //         },
    //         {
    //             "teacherId": "tea003",
    //             "teacherName": "Mahek",
    //             "hobbies": ["naki thay evu nthi", 'vichari ne lakhsu']
    //         }
    //         ])
        
        db.students.find({})

        db.teachers.find({})


        // lookup  and unwind
        
        
        db.students.aggregate([
            {
               $lookup: {
                      from: "teachers",
                      localField: "faculty",
                      foreignField: "teacherId",
                      as: "faculty",
                      pipeline:[
                          {
                              $project: {
                                  teacherId : 0,
                              },
                          },
                          {
                              $unwind : "$hobbies"
                          }
                          ],
                    },
            },
            {
                $unwind: "$faculty",
            },
            {
                $project: {
                    stuName:1,
                    teacherName :"$faculty.teacherName",
                },
            },
            ]);
            
            
            
           