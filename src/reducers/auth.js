import {LOGIN, LOGOUT} from "../actions/types";

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: true };
        case LOGOUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

export default auth;