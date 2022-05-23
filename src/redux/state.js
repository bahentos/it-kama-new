import renderEntireTree from "../render"

let state = {
    profilePage: {
        postsData: [
            { id: 1, post: 'Est et cupidatat minim voluptate eiusmod dolore commodo culpa proident pariatur consectetur.' , like_count: 2},
            { id: 2, post: 'Exercitation et anim minim voluptate ad nisi commodo ipsum commodo ad et elit laboris.' , like_count: 5},
            { id: 3, post: 'Ut velit pariatur ex ex ipsum veniam laboris ipsum tempor ipsum enim velit.' , like_count: 7},
            { id: 4, post: 'Et excepteur do est labore velit deserunt duis.' , like_count: 22},
          ],
        newPostText: ''
    },
    
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'John' },
            { id: 2, name: 'Anny' },
            { id: 3, name: 'Stieven' },
            { id: 4, name: 'Tony' },
            { id: 5, name: 'Larry' }
        ],
    
        messagesData: [
            { id: 1, message: 'Do esse exercitation aliqua ea ullamco est anim do nostrud magna tempor.' },
            { id: 2, message: 'Nulla ea eiusmod magna anim ex commodo ullamco duis nulla anim cupidatat do eiusmod ut.' },
            { id: 3, message: 'Ea ea nisi voluptate deserunt Lorem proident.' },
            { id: 4, message: 'Lorem fugiat exercitation in magna et laboris cillum amet enim excepteur irure ullamco.' },
            { id: 5, message: 'Labore Lorem et veniam est.' }
        ],

        newMessageText: ''

    }
}
//Функции для раздела "Profile"
export let addPost = () => {
    let newPost = {
        id: 5, post: state.profilePage.newPostText, like_count: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export let update_new_post_text = (new_text) => {
    state.profilePage.newPostText = new_text
    renderEntireTree(state)
}

//Функции для раздела "Dialogs"
export let addMessage = () => {
    let newMessage = {
        id: 5, message: 
        state.dialogsPage.newMessageText
    }
    state.dialogsPage.messagesData.push(newMessage)
    state.dialogsPage.newMessageText = ''
    renderEntireTree(state)
}

export let update_new_message_text = (new_text) => {
    state.dialogsPage.newMessageText = new_text
    renderEntireTree(state)
}

export default state;

window.state = state