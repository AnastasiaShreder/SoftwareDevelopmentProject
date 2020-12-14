import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import StudentProfile from '@/components/StudentProfile';
const {connect} = require("react-redux");

const STUDENT_PROFILE = connect(mapStateToProps("STUDENT_PROFILE"), mapDispatchToProps("STUDENT_PROFILE"))(StudentProfile);

export default STUDENT_PROFILE;