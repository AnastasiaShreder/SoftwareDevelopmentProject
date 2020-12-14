import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import ProfileEditSchool from '../ProfileEditSchool';
const {connect} = require("react-redux");

const PROFILE_EDIT_SCHOOL= connect(mapStateToProps("PROFILE_EDIT_SCHOOL"), mapDispatchToProps("PROFILE_EDIT_SCHOOL"))(ProfileEditSchool);

export default PROFILE_EDIT_SCHOOL;