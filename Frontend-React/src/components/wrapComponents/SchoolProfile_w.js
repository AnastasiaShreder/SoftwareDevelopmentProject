import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import SchoolProfile from '@/components/SchoolProfile';
const {connect} = require("react-redux");

const SCHOOL_PROFILE = connect(mapStateToProps("SCHOOL_PROFILE"), mapDispatchToProps("SCHOOL_PROFILE"))(SchoolProfile);

export default SCHOOL_PROFILE;