import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, initializeTodo } from '../actions/todoActions';

import Todo from './Todo';
import '../styles/home.scss';

function Home() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        const inputBox = document.getElementById('newTodo');
        const newTodo = inputBox.value;
        dispatch(addTodo(newTodo));
        inputBox.value = '';
    }

    useEffect(() => {
        dispatch(initializeTodo());
    }, []);

    return (
        <div className='home__container'>
            <div className='home__header'>
                <input type="text" id='newTodo' className='home__input-box' placeholder='Enter Todo' />
                <button onClick={handleAdd} className='home__add-button'>Add Todo</button>
            </div>

            <div className='home__todos-parent'>
                {(todos.length > 0) ?
                    (todos.map((curr, index) => {
                        return (
                            <Todo todoElement={curr} key={index} />
                        )
                    })) : (
                        <h2>No Todos Found!</h2>
                    )}
            </div>
        </div>
    )
}

export default Home;