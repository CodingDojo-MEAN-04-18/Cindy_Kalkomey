const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/messages');
mongoose.connection.on('connected', () => console.log('Mongodb connected'));

const { Schema } = mongoose;
// const Schema = mongoose.Schema;



// Create Schemas for models
const messageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    msgtext: {
        type: String,
        required: [true, 'Message text is required'],
    },
    // "type" should be Schema.Types.ObjectId and "ref" should point
    // to the "ModelName" you choose when using mongoose.model("ModelName", modelSchema)
    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ]
    }, {
      timestamps: true,
    });


const commentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    cmttext: {
        type: String,
        required: [true, 'Comment text is required'],
    },
    message: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
      }
    }, {
      timestamps: true,
    });


// creates collection => messages
const Message = mongoose.model('Message', messageSchema);

// creates collection => comments
const Comment = mongoose.model('Comment', commentSchema);


// Use native promises -- do I need this? It was in the platform example
mongoose.Promise = global.Promise;



// Create Routes

// Root Request -- render the index view 
app.get('/', function (req, res) {

    console.log('in the index get route');

    Message.find({})
    .populate('comments')
    .then(messages => {
        res.render('index', { messages });
    })
    .catch(console.log);
});

// Add Message route POST
app.post('/add_msq', function(req, res) {
    console.log('body', req.body);
  
    // creates and save message document
    Message.create(req.body)
        .then(message => {
            res.redirect('/');
        })
        .catch(console.log);
  
});

// Add Comment route POST
app.post('/add_cmt/:id', function(req, res) {
    console.log('request', req.body);

    Comment.create(req.body)

        .then(comment => {
            return Message.findById(req.params.id)
                .then(message => {
                    console.log('found message =', message);
                    message.comments.push(comment);
                    return message.save();
            })
            .then(() => {
                res.redirect('/');
            });
        })

        .catch(console.log);

});


app.listen(port, () => console.log(`express server listening on port ${port}`));