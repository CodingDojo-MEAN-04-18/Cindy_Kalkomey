// Assignment: Intro to MongoDB
// Do the following operations in a MongoDB database. For some of these, you may have to refer to MongoDB's operator documentation.

// 1.Create a database called 'my_first_db'.
// > use my_first_db
// switched to db my_first_db

// 2. Create students collection.
// > db.createCollection("students")
// { "ok" : 1 }

// 3. Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

// 4. Create 5 students with the appropriate info.

// 5. Get all students.

// 6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

// 7. Get all students whose lucky number is:
//    a. greater than 3
//    b. less than or equal to 10
//    c. between 1 and 9 (inclusive)

// 8. Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

// 9. Add some unique interests for each particular student into each of their interest arrays.

// 10. Add the interest 'taxes' into someone's interest array.

// 11. Remove the 'taxes' interest you just added.

// 12. Remove all students who are from California (or Washington).

// 13. Remove a student by name. 

// 14. Remove a student whose lucky number is greater than 5 (JUST ONE)

// 15. Add a field to each student collection called 'number_of_belts' and set it to 0.

// 16. Increment this field by 1 for all students in Washington (Seattle Dojo).

// 17. Rename the 'number_of_belts' field to 'belts_earned'

// 18. Remove the 'lucky_number' field.

// 19. Add a 'updated_on' field, and set the value as the current date.



const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT  || 8000;
const app = express();


// 1.Create a database called 'my_first_db'.
// > use my_first_db
// switched to db my_first_db
mongoose.connect('mongodb://localhost/my_first_db');
mongoose.connection.on('connected', () => console.log('Mongodb connected'));

// Schema will now stand for mongoose.Schema
const { Schema } = mongoose;
// const Schema = mongoose.Schema;

// 3. Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
const studentSchema = new Schema({
  name: {
    type: String
  },
  home_state: {
    type: String
  },
  lucky_number: {
    type: Number,
  },
  birthday: {
    month: {
        type: Number,
    },
    day: {
        type: Number,
    },
    year: {
        type: Number,
    },
  },
});

// 2. Create students collection. if in the mongo terminal:
// > db.createCollection("students")

// creates collection => students (singular 'Student' => collection 'students')
mongoose.model('Student', studentSchema);

// assume different file  (??? I forgot what this is doing ???)
const Student = mongoose.model('Student');

// 4. Create 5 students with the appropriate info.

const student1 = new Student({
  name: 'Chloe',
  home_state: 'Texas',
  lucky_number: 9,
  birthday: {
    month: 'May',
    day: 3,
    year: 2005,
  }
});

student1.save()
    .then(student1 => {
        console.log('saved student', student1);
    })
    .catch(error => {
        console.log('got an error');
        const errors = Object.keys(error.errors).map(key => {
        return error.errors[key].message;
        });

    console.log(errors);
    });




// app.get('/', function(request, response) {
//   Animal.find({})
//     .then(animals => {
//       response.send(animals);

//       // response.render('animals', { animals });
//     })
//     .catch(console.log);
// });


app.listen(port, () => console.log(`express server listening on port ${ port}`));