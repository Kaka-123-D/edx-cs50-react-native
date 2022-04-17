import { connect } from "react-redux";
import TodoApp from "../app/TodoApp";

const mapStateToProps = (state) => ({
  status: state.auth.status,
  darkMode: state.auth.darkMode,
});

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(TodoApp);
