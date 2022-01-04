import { UserAction } from '../actions/userActions'

export interface UserState {
    user: {
        userName: string;
        password: string;
    }
}

const initialState = {
    user: {
        userName: '',
        password: ''
    }
};

export const userReducer = (
    state: UserState = initialState,
    action: UserAction
) => {
    switch (action.type) {
        case 'USER_LOGIN': {
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.payload.userName,
                    password: action.payload.password
                }
            };
        }

        default:
            return state;
    }
}