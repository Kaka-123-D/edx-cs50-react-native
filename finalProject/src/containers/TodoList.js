import { connect } from "react-redux";
import TodoList from "../screens/TodoList";
import { setStatus, removeTodo } from "../store/reducers/Todo";

const mapStateToProps = (state) => ({
    todoList: state.todo.todoList,
});

const mapActionToProps = {
  setStatus,
  removeTodo
};

export default connect(mapStateToProps, mapActionToProps)(TodoList);
