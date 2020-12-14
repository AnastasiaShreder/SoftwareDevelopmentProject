import OPEN_SIGN_IN from "../actions/openSignIn";

function openSignIn(value) {
    return {
        type: OPEN_SIGN_IN,
        signInIsOpen: value
    };
}

export default openSignIn;