import React from 'react';
import style from './navbar.module.scss'
import { useLocation } from 'react-router-dom';
const Navbar = () => {

    const location = useLocation();

    interface routerListType {
        todoList: string,
        editTodo: string,
    }

    const routerList: routerListType = {
        todoList: '/',
        editTodo: '/edit'
    }

    const showPage = (): string => {
        if (location.pathname === routerList.editTodo) {
            return 'Edit Todo'
        }
        return 'Todo List'
    }

    return (
        <nav className={`nav-wrapper`}>
            <div className={`nav-wrapper ${style.doTitle} `}>
                <a href="#" >{showPage()}</a>
            </div>
        </nav>
    )
}


export default Navbar;