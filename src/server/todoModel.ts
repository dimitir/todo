const mongoose = require("mongoose");

exports.todosInitial = [
    {
        title: "Работа",
        discription: "Mongoose, insert multiple items",
        completed: false
    },
    {
        title: "Магазин",
        discription: "Купить сыр, хлеб",
        completed: false
    },
    {
        title: "Английский",
        discription: "Выбрать интересные видео",
        completed: false
    },
    {
        title: "Подведение итогов",
        discription: "Подход к оцениванию",
        completed: false
    },
];


const todoShema = mongoose.Schema({
    title: String,
    discription: String,
    completed: Boolean,
});

exports.TodoModel = mongoose.model("todos", todoShema);