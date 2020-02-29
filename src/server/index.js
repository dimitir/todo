const express = require('express');
// const doSetData = require('./dbSetData'); doSetData(); 
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const TodoModel = require('./todoModel').TodoModel;

const port = process.env.PORT || 8080;
const app = express();
const jsonParser = express.json();

const startServer = () => {
    app.listen(port, () => console.log(`App started on port ${port}`));
}

const connectDb = () => {
    const options = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
    mongoose.connect('mongodb://localhost:27017/tododb', options)
    return mongoose.connection
}

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)


app.get('/api/todo', (req, res) => {
    TodoModel.find({}, '')
        .then(function (todo) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(todo);
            // console.log(todo);
        })
        .catch(function (err) {
            res.status(500).send(err)
        })
})


app.post('/api/todo', jsonParser, (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }
    res.json('ok');

    (async () => {
        try {
            const todo = await TodoModel.create(
                {
                    _id: req.body._id,
                    title: req.body.title,
                    discription: req.body.discription,
                    completed: req.body.completed
                }
            );
            const todoItem = await todo.save();
        }

        catch (err) {
            console.error(err)
        }
    })();
})


app.delete('/api/todo/:id', (req, res) => {
    const id = req.params.id;
    (async () => {
        try {
            const deleteTodo = await TodoModel.findByIdAndDelete(id);
            const resSend = await res.send(deleteTodo);
            console.log(resSend);
        }
        catch (err) { console.error(err) }
    })();
});


app.put('/api/todo/edit', jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const id = req.body._id;

    (async () => {
        console.log('jk');
        try {

            const editingTodo = await TodoModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
            const edited = await res.status(200).json(editingTodo);

        } catch (err) {
            // handleError(res, error.message);
            console.err(err);

        }
    })()

});




app.put('/api/todo/completed/:id', jsonParser, (req, res) => {
    const id = req.params.id;
    (async () => {
        try {
            const todo = await TodoModel.findById(id, 'completed');
            console.group('changecompleted');
            console.log(todo);
            const editingTodo = await TodoModel.findByIdAndUpdate({ _id: id }, { completed: !todo.completed }, { new: true });
            const edited = await res.status(200).json(editingTodo);
        } catch (err) {
            console.err(err);
        }
    })()
});


