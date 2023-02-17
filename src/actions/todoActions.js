import { ADD_TODO, EDIT_TODO, DELETE_TODO, INIT_TODO } from "../actionTypes/todoActionTypes";

const initializeTodo = () => {
    return {
        type: INIT_TODO,
    }
}

const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: { newTodo },
    };
};

const deleteTodo = (newTodos) => {
    return {
        type: DELETE_TODO,
        payload: { newTodos },
    };
};

const editTodo = (newTodos) => {
    return {
        type: EDIT_TODO,
        payload: { newTodos },
    };
};

export { addTodo, editTodo, deleteTodo, initializeTodo };