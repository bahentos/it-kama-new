import { InitialAppType } from '../types/types';
import { getAuthThunk } from './auth_reducer';

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';


export type ActionOnlyTypeType = {type: string}


let initial_state: InitialAppType = {
    initialized: false
}

const app_reducer = (state = initial_state, action: any): InitialAppType => {
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


type InitializationSuccessActionType = {type: typeof INITIALIZATION_SUCCESS}
export let initializationSuccess = (): InitializationSuccessActionType => ({ type: INITIALIZATION_SUCCESS })


//##Thunk - auth_reducer
export const initialize = (): any => (dispatch: any) => {
    Promise.all([dispatch(getAuthThunk())]).then(response => {
        dispatch(initializationSuccess())
    })
}


export default app_reducer