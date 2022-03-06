import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT, SIGN_IN, SIGN_OUT, GET_PROFILE, EDIT_PROFILE } from './types';


const initialState = {

};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                userinfo: action.payload[0]
            }
        case EDIT_PROFILE:
            return {
                ...state,
                userinfo: action.payload
            }
        case SIGN_IN:
            
            return {
                ...state,
                authenticated: true,
                user: action.payload,
            }
        case SIGN_OUT:
            return {
                ...state,
                authenticated: false,
                user: null,
            }
        default:
            return state;
    }
}
