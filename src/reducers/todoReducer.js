import { ADD_TODO, EDIT_TODO, DELETE_TODO, INIT_TODO } from "../actionTypes/todoActionTypes";

const initialState = {
    todos: ["Watch IND vs AUS!"],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_TODO:
            return {
                ...state,
                todos: ["Watch IND vs AUS!"],
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload.newTodo],
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: [...action.payload.newTodos],
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: [...action.payload.newTodos],
            };
        default:
            return state;
    }
};