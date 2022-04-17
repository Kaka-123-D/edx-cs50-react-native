import { connect } from "react-redux";
import LogoutButton from "../components/LogoutButton";
import { logout } from "../store/reducers/Auth";

const mapStateToProps = (state) => ({});

const mapActionToProps = { logout };

export default connect(mapStateToProps, mapActionToProps)(LogoutButton);
