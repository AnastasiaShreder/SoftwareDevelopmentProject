import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import ProfileEditStudent from '../ProfileEditStudent';
const {connect} = require("react-redux");

const PROFILE_EDIT_STUDENT = connect(mapStateToProps("PROFILE_EDIT_STUDENT"), mapDispatchToProps("PROFILE_EDIT_STUDENT"))(ProfileEditStudent);

export default PROFILE_EDIT_STUDENT;