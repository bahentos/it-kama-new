import axios from "axios"

// const samuraijs = axios.create({
//   baseURl: `https://social-network.samuraijs.com/api/1.0/`,
//   withCredentials: true,
//   headers: {
//     'API-KEY': 'cdcab232-0ced-49ce-8cad-05303fd09599'
//   }
// })

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
    return axios.get(`profile/${!id ? 1608 : id}`).then(response => {
      return response.data
    })
  },

  getStatus (id) {
    return axios.get(`profile/status/${id}`).then(response => {
      return response.data
    })
  },

  putStatus (status) {
    return axios.put(`profile/status`, {status: status} ).then(response => {
      return response.data
    })
  },
  
  saveProfile (formData) {
    return axios.put(`profile`, formData ).then(response => {
      return response.data
    })
  },

  putPhoto (file) {
    let photoData = new FormData()
    photoData.append('image', file)
    return axios.put(`profile/photo`, photoData,{
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }).then(response => {
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
  },

  login (email, password, rememberMe = false) {
    return axios.post('auth/login',{email, password, rememberMe}).then(response => {
      return response.data
    })
  },

  logout () {
    return axios.delete('auth/login').then(response => {
      return response.data
    })
  }
}