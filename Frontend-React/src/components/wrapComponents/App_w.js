import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import App from '@/App';
const {connect} = require("react-redux");

const APP = connect(mapStateToProps("APP"), mapDispatchToProps("APP"))(App);

export default APP;