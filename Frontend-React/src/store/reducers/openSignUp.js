import initialState from "../initialState";
import OPEN_SIGN_UP from "../actions/openSignUp";

function signUpIsOpen(state = initialState.signUpIsOpen, action) {
    switch (action.type) {
        case OPEN_SIGN_UP: return action.signUpIsOpen;

        default: return state;
    }
}

export default signUpIsOpen;