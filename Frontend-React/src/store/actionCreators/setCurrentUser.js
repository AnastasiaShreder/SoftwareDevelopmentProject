import SET_CURRENT_USER from '@/store/actions/setCurrentUser';

function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        currentUser: user
    };
}

export default setCurrentUser;