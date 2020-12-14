import OPEN_SIGN_UP from "../actions/openSignUp";

function openSignUp(value) {
    return {
        type: OPEN_SIGN_UP,
        signUpIsOpen: value
    };
}

export default openSignUp;