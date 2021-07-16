const initialState = {
    user: null,
    isLoggedIn: false
}

export const loginReducer = (state, {type, payload}) => {
    switch(type) {
        case 'LOGIN':
            return {
                user: payload,
                isLoggedIn: true
            }
        case 'LOGOUT':
            return initialState
    }
    return initialState
}