import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import ProfileEdit from '@/components/ProfileEdit';
const {connect} = require("react-redux");

const PROFILE_EDIT = connect(mapStateToProps("PROFILE_EDIT"), mapDispatchToProps("PROFILE_EDIT"))(ProfileEdit);

export default PROFILE_EDIT;