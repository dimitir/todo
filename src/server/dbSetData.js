const mongoose = require("mongoose");

const TodoModel = require('./todoModel').TodoModel;
const todosInitial = require('./todoModel').todosInitial;


mongoose.connect("mongodb://localhost:27017/tododb", { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

module.exports = () => {
    db.once('open', function () {
        console.log("Connection Successful!");

        TodoModel.collection.insert(todosInitial, function (err, docs) {
            if (err) {
                return console.error(err);
            } else {
                console.log("Multiple documents inserted");
            }
        });
    });
}

