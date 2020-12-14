import {combineReducers} from "redux";
import signInIsOpen from "./openSignIn";
import signUpIsOpen from "./openSignUp";
import currentUser from '@/store/reducers/setCurrentUser';

const reducers = combineReducers({signInIsOpen, signUpIsOpen, currentUser});

export default reducers;