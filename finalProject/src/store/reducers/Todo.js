import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action) {
      let todo = {
        id: state.todoList.length + 1,
        title: action.payload,
        status: false,
      };
      state.todoList.push(todo);
    },
    removeItem(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    setStatusById(state, action) {
      state.todoList = state.todoList.filter((todo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
        }
        return todo;
      });
    },
  },
});

const { addItem, removeItem, setStatusById } = todo.actions;

export const addTodo = (todo) => (dispatch) => {
  dispatch(addItem(todo));
};
export const removeTodo = (todo) => (dispatch) => {
  dispatch(removeItem(todo));
};

export const setStatus = (id) => (dispatch) => {
  dispatch(setStatusById(id));
};

export default todo.reducer;
