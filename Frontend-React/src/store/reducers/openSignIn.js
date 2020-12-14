import initialState from "../initialState";
import OPEN_SIGN_IN from "../actions/openSignIn";

function signInIsOpen(state = initialState.signInIsOpen, action) {
    switch (action.type) {
        case OPEN_SIGN_IN: return action.signInIsOpen;

        default: return state;
    }
}

export default signInIsOpen;