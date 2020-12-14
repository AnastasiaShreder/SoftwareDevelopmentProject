import initialState from "../initialState";
import SET_CURRENT_USER from '@/store/actions/setCurrentUser';

function currentUser(state = initialState.currentUser, action) {
    switch (action.type) {
        case SET_CURRENT_USER: return action.currentUser;

        default: return state;
    }
}

export default currentUser;