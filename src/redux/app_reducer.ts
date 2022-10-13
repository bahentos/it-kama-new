import { getAuthThunk } from './auth_reducer';

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';


export type ActionOnlyTypeType = {
    type: string
}

type InitializationSuccessActionType = {
    type: typeof INITIALIZATION_SUCCESS
}


export type InitialStateType = {
    initialized: boolean 
}


let initial_state: InitialStateType = {
    initialized: false
}

const app_reducer = (state = initial_state, action: any): InitialStateType => {
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

export let initializationSuccess = (): InitializationSuccessActionType => ({ type: INITIALIZATION_SUCCESS })


//##Thunk - auth_reducer
export const initialize = (): any => (dispatch: any) => {
    Promise.all([dispatch(getAuthThunk())]).then(response => {
        dispatch(initializationSuccess())
    })
}


export default app_reducer