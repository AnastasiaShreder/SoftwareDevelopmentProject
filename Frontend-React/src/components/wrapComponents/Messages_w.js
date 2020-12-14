import mapStateToProps from "../../store/mapStateToProps"
import mapDispatchToProps from "../../store/mapDispatchToProps"
import Messages from '@/components/Messages'
const {connect} = require("react-redux")

const MESSAGES = connect(mapStateToProps("MESSAGES"), mapDispatchToProps("MESSAGES"))(Messages);

export default MESSAGES;