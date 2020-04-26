const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login sucess');
            return {
                ...state,
                authError: null
            }
            case 'SIGNOUT_SUCESS':
                console.log('signout sucess');
                return state;
        default:
            return state;
    }
}

export default authReducer