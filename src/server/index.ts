const express = require('express');
// const doSetData = require('./dbSetData'); doSetData(); 
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const TodoModel = require('./todoModel').TodoModel;
import { Request, Response } from 'express';
import { TodoItemType } from '../client/store/RootStore/types';
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

app.get('/api/todo', (req: any, res: any) => {

    (async () => {
        try {
            const todo = await TodoModel.find({});
            await res.json(todo);
        }
        catch (err) {
            await res.status(500).send(err);
        }
    })()

})



app.post('/api/todo', jsonParser, (req: Request, res: Response) => {
    if (!req.body) {
        res.sendStatus(400);
    }
    res.json('ok');


    const todoItem = {
        _id: req.body._id,
        title: req.body.title,
        discription: req.body.discription,
        completed: req.body.completed
    };

    (async () => {
        try {
            const todo: any = await TodoModel.create(todoItem);
            await todo.save();
        }
        catch (err) {
            console.error(err)
        }
    })();
})


app.delete('/api/todo/:id', (req: Request, res: Response) => {
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


app.put('/api/todo/edit', jsonParser, (req: Request, res: Response) => {
    if (!req.body) res.sendStatus(400);
    const id = req.body._id;

    (async () => {
        try {

            const editingTodo = await TodoModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
            const edited = res.status(200).json(editingTodo);

        } catch (err) {
            console.error(err);

        }
    })()

});




app.put('/api/todo/completed/:id', jsonParser, (req: any, res: any) => {
    const id = req.params.id;
    (async () => {
        try {
            const todo = await TodoModel.findById(id, 'completed');
            const editingTodo = await TodoModel.findByIdAndUpdate({ _id: id }, { completed: !todo.completed }, { new: true });
            const edited = await res.status(200).json(editingTodo);
        } catch (err) {
            console.error(err);
        }
    })()
});

