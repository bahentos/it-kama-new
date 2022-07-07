import { getAuthThunk } from './auth_reducer';

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';

let initial_state = {
    initialized: false
}

const app_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export let initializationSuccess = () => ({ type: INITIALIZATION_SUCCESS })


//##Thunk - auth_reducer
export const initialize = () => dispatch => {
    Promise.all([dispatch(getAuthThunk())]).then(response => {
        dispatch(initializationSuccess())
    })
}


export default app_reducer