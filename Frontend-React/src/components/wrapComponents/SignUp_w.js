import {connect} from "react-redux"
import SignUp from "../SignUp";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";

const SIGN_UP = connect(mapStateToProps("SIGN_UP"), mapDispatchToProps("SIGN_UP"))(SignUp);

export default SIGN_UP;