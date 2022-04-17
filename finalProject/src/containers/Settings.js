import { connect } from "react-redux";
import Settings from "../screens/Settings";
import { changeMode } from "../store/reducers/Auth";

const mapStateToProps = (state) => ({
    mode: state.auth.darkMode,
});

const mapActionToProps = { changeMode };

export default connect(mapStateToProps, mapActionToProps)(Settings);
