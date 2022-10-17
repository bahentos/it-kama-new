//Initial state types
export type InitialAuthType = {
  id: number | null;
  login: string | null;
  email: string | null;
  is_auth: boolean;
  //индикатор загрузки информации с сервера
  is_load: boolean;
  captchaUrl: string | null;
};

export type InitialAppType = {
    initialized: boolean 
}

export type InitialProfileType = {
    profile: ProfileType | null,
    isEdit: boolean,
    status: string,
    postsData: PostDataType[]
}


export type InitialUsersType = {
  //всего записей пользователей на сервере
  total_users_count: number | null;
  //размер одной страницы
  page_size: number | null;
  //общее количество страниц
  page_count: number | null;
  //текущая страница
  current_page: number | null;
  //индикатор загрузки информации о пользователях с сервера
  is_load: boolean;
  //индикатор загрузки подписки с сервера
  followIsLoad: number[];
  //массив пользователей
  users: UsersType[];
};

export type InitialDialogsType = {
    dialogsData: DialogType[],
    messagesData: MessageType[],
    newMessageText: string | null
}

export type InitialSidebarType = {}



//Inside type
export type ProfileType = {
    "aboutMe": string | null,
    "contacts": {
        "facebook": string | null,
        "website": string | null,
        "vk": string | null,
        "twitter": string | null,
        "instagram": string | null,
        "youtube": string | null,
        "github": string | null,
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string | null,
    "userId": number,
    "photos": {
        "small": string | null,
        "large": string | null
    }
}

export type DialogType = { id: number; name: string };

export type MessageType = { id: number; message: string };

export type UsersType = {
  name: string | null;
  id: number;
  uniqueUrlName: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

export type PostDataType = {
    id: number,
    post: string,
    like_count: number
}
