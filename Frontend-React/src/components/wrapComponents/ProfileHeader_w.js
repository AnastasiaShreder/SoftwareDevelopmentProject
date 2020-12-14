import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import ProfileHeader from '@/components/ProfileHeader';
const {connect} = require("react-redux");

const PROFILE_HEADER = connect(mapStateToProps("PROFILE_HEADER"), mapDispatchToProps("PROFILE_HEADER"))(ProfileHeader);

export default PROFILE_HEADER;