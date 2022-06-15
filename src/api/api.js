import axios from "axios"

const samuraijs = axios.create({
  baseURl: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    'API-KEY': 'cdcab232-0ced-49ce-8cad-05303fd09599'
  }
})

axios.defaults.baseURL = `https://social-network.samuraijs.com/api/1.0/`
axios.defaults.withCredentials = true
axios.defaults.headers = {'API-KEY': 'cdcab232-0ced-49ce-8cad-05303fd09599'}

export const users_api = {
  getUsers (current_page = 1, page_size = 10) {
    return axios.get(`users?page=${current_page}&count=${page_size}`).then(response => {
        return response.data
      })
  }

}

export const profile_api = {
  getProfile (id) {
    return axios.get(`profile/${!id ? 2 : id}`).then(response => {
      return response.data
    })
  }
}

export const follow_api = {
  getFollow (id) {
    return axios.post(`follow/${id}`, {}).then(response => {
        return response.data.resultCode
      })
  },

  deleteFollow (id) {
    return axios.delete(`follow/${id}`).then(response => {
        return response.data.resultCode
      })
  }
}

export const auth_api = {
  getAuth () {
    return axios.get(`auth/me`).then(response => {
      return response.data
    })
  }
}
// export const auth_api = {
//   getAuth () {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//       withCredentials: true
//     }).then(response => {
//       return response.data
//     })
//   }
// }