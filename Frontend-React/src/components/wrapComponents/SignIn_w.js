import SignIn from "../SignIn";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
const {connect} = require("react-redux");

const SIGN_IN = connect(mapStateToProps("SIGN_IN"), mapDispatchToProps("SIGN_IN"))(SignIn);

export default SIGN_IN;