import { stopSubmit } from "redux-form";
import { auth_api, security_api } from "../api/api";

const ADD_PROFILE_USER = "ADD_PROFILE_USER";
const TOGGLE_IS_LOAD = "TOGGLE_IS_LOAD";
const SET_CAPTCHA = "SET_CAPTCHA";

type InitialStateType = {
  id: number | null;
  login: string | null;
  email: string | null;
  is_auth: boolean;
  //индикатор загрузки информации с сервера
  is_load: boolean;
  captchaUrl: string | null;
};

let initial_state: InitialStateType = {
  id: null,
  login: null,
  email: null,
  is_auth: false,
  //индикатор загрузки информации с сервера
  is_load: false,
  captchaUrl: null,
};

const auth_reducer = (state = initial_state, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_PROFILE_USER:
      return {
        ...state,
        ...action.data,
        is_auth: action.is_auth,
      };
    case TOGGLE_IS_LOAD:
      return { ...state, is_load: action.isLoad };

    case SET_CAPTCHA:
      return { ...state, captchaUrl: action.url };

    default:
      return state;
  }
};

type SetAddProfileUserType = {
  type: typeof ADD_PROFILE_USER;
  data: object;
  is_auth: boolean;
};

export let add_profile_user = (
  data: object,
  is_auth: boolean
): SetAddProfileUserType => ({ type: ADD_PROFILE_USER, data, is_auth });

type ToggleIsLoadType = {
  type: typeof TOGGLE_IS_LOAD;
  isLoad: boolean;
};
export let toggle_is_load = (isLoad: boolean): ToggleIsLoadType => ({
  type: TOGGLE_IS_LOAD,
  isLoad,
});

type SetCaptchaUrlType = {
  type: typeof SET_CAPTCHA;
  url: string;
};
export let set_captcha_url = (url: string): SetCaptchaUrlType => ({
  type: SET_CAPTCHA,
  url,
});

//##Thunk - auth_reducer
export const getAuthThunk = () => async (dispatch: any) => {
  dispatch(toggle_is_load(true));
  let response = await auth_api.getAuth();
  if (response.resultCode === 0) {
    dispatch(add_profile_user(response.data, true));
    dispatch(toggle_is_load(false));
  }
};

export const getCaptchaThunk = (
  email: string,
  password: string,
  rememberMe = false
) => async (dispatch: any) => {
  const response = await security_api.getCaptcha();
  const url = response.url;
  dispatch(set_captcha_url(url));
};

export const loginThunk = (
  email: string,
  password: string,
  rememberMe = false,
  captcha: null = null
) => async (dispatch: any) => {
  dispatch(toggle_is_load(true));
  let response = await auth_api.login(email, password, rememberMe, captcha);
  if (response.resultCode === 0) {
    dispatch(getAuthThunk());
    dispatch(toggle_is_load(false));
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaThunk(email, password, rememberMe));
    }
    let messages =
      response.messages.length > 0 ? response.messages : "Some error";
    dispatch(stopSubmit("login", { _error: messages }));
  }
};

export const logoutThunk = () => async (dispatch: any) => {
  dispatch(toggle_is_load(true));
  const response = await auth_api.logout();
  if (response.resultCode === 0) {
    dispatch(add_profile_user({ id: null, login: null, email: null }, false));
    dispatch(toggle_is_load(false));
  }
};

export default auth_reducer;
