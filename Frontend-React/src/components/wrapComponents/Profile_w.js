import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import Profile from '@/components/Profile';
const {connect} = require("react-redux");

const PROFILE = connect(mapStateToProps("PROFILE"), mapDispatchToProps("PROFILE"))(Profile);

export default PROFILE;