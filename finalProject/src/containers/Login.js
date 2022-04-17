import { connect } from "react-redux";
import Login from "../screens/Login";
import { login } from "../store/reducers/Auth";

const mapStateToProps = (state) => ({
    error: state.message.error,
});

const mapActionToProps = { login };

export default connect(mapStateToProps, mapActionToProps)(Login);
