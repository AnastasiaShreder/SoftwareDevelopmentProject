import { bindActionCreators } from 'redux';
import openSignIn from "./actionCreators/openSignIn";
import openSignUp from "./actionCreators/openSignUp";
import setCurrentUser from '../store/actionCreators/setCurrentUser';


// передаёт в компонент методы для обновления необходимого поля store
function mapDispatchToProps(component) {
    switch (component) {
        case "SIGN_IN": {
            return function (dispatch) {
                return {
                    openSignIn: bindActionCreators(openSignIn, dispatch),
                    openSignUp: bindActionCreators(openSignUp, dispatch),
                    setCurrentUser: bindActionCreators(setCurrentUser, dispatch)
                }
            }
        }

        case "SIGN_UP": {
            return function (dispatch) {
                return {
                    openSignUp: bindActionCreators(openSignUp, dispatch),
                    openSignIn: bindActionCreators(openSignIn, dispatch)
                }
            }
        }

        case "SIGN_IN_PAGE": {
            return function (dispatch) {
                return {
                    openSignIn: bindActionCreators(openSignIn, dispatch)
                }
            }
        }

        case "APP": {
            return function (dispatch) {
                return {
                    setCurrentUser: bindActionCreators(setCurrentUser, dispatch)
                }
            }
        }

        case "PROFILE_EDIT_STUDENT": {
            return function (dispatch) {
                return {
                    setCurrentUser: bindActionCreators(setCurrentUser, dispatch)
                }
            }
        }

        case "PROFILE_EDIT_SCHOOL": {
            return function (dispatch) {
                return {
                    setCurrentUser: bindActionCreators(setCurrentUser, dispatch)
                }
            }
        }

        default: return undefined;
    }

}

export default mapDispatchToProps;