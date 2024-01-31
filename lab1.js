use FacultySystemDB
db.createCollection("student")
show collections

// insert one document
db.student.insertOne({"firstname":"ahmed",
    "lastname":"khaled",
    "age":23,
    "faculty":{"name":"cs","address":"abassya"},
    "grades":[{coursename:"os",grade:"very good",pass:true},{coursename:"algorithms",grade:"good",pass:true}],
    "isFired":false
    })
//insert 2 documents    
 db.student.insertMany([{"firstname":"mostafa",
    "lastname":"mohamed",
    "age":25,
    "faculty":{"name":"helwan cs","address":"helwan"},
    "grades":[{coursename:"os",grade:"good",pass:true},{coursename:"algorithms",grade:"excellent",pass:true}],
    "isFired":true},
    
    {"firstname":"mohamed",
    "lastname":"ayman",
    "age":26,
    "faculty":{"name":"engineering","address":"abassya"},
    "grades":[{coursename:"drawing",grade:"very good",pass:true},{coursename:"structure",grade:"good",pass:true}],
    "isFired":true
    }
    ])  
   //find all students
   db.student.find({}) 
   

   //student with specfic firstname
    db.student.find({firstname:"mohamed"})
 
   // Students who his First Name=Ahmed, or Last Name= Ahmed.
    db.student.find({$or:[{firstname:"ahmed"},{lastname:"ahmed"}]})   
    
    //Students that their First name isn't "Ahmed".
    
    db.student.find({firstname:{$ne:"ahmed"}})
    
    //Students with Age more than or equal to 21, and their faculty isn't NULL.
    db.student.find({
        $and:
        [
        {age:{$gte:21}},
        {faculty:{$ne:null}}
        ]})
        
        //Display student with specific First Name, and display his First Name, Last name, IsFired fields only.
         db.student.find({firstname:"mostafa"},{lastname:1,firstname:1,isFired:1,_id:0})
          
         
       //Update the student with specific FirstName, and change his LastName.
         
         db.student.updateOne({firstname:"ahmed"},{$set:{lastname:"hamada"}})
         
          //Delete Fired students.
          db.student.deleteMany({isFired:true})
          //
          db.student.drop()
          //
          db.student.
          





















