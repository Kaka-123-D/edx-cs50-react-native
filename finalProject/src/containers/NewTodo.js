import { connect } from "react-redux";
import NewTodo from "../screens/NewTodo";
import { addTodo } from "../store/reducers/Todo";

const mapStateToProps = (state) => ({
});

const mapActionToProps = { addTodo };

export default connect(mapStateToProps, mapActionToProps)(NewTodo);
