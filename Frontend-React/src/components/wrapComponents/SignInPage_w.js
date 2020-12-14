import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import SignInPage from '@/components/SignInPage';
const {connect} = require("react-redux");

const SIGN_IN_PAGE = connect(mapStateToProps("SIGN_IN_PAGE"), mapDispatchToProps("SIGN_IN_PAGE"))(SignInPage);

export default SIGN_IN_PAGE;