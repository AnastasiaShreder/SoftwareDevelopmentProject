import mapStateToProps from "../../store/mapStateToProps"
import mapDispatchToProps from "../../store/mapDispatchToProps"
import Requests from '@/components/Requests'
const {connect} = require("react-redux")

const REQUESTS = connect(mapStateToProps("REQUESTS"), mapDispatchToProps("REQUESTS"))(Requests);

export default REQUESTS;