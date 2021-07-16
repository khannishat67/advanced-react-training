const initialState = {
    count: 0
}

const countReducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
    }
    return initialState
}

export {countReducer};