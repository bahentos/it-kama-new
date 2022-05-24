let renderEntireTree = () => {
    console.log('state  changed');
    
}

const store = {
    state: {
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
            newMessageText: '',
        }, 

        addPost() {
            let newPost = {
                id: 5, post: store.state.profilePage.newPostText, like_count: 0
            }
            store.state.profilePage.postsData.push(newPost)
            store.state.profilePage.newPostText = ''
            renderEntireTree(store.state)
        },
    
        update_new_post_text(new_text){
            store.state.profilePage.newPostText = new_text
            renderEntireTree(store.state)
        },
        
    
        addMessage() {
            let newMessage = {
                id: 5, 
                message: store.state.dialogsPage.newMessageText
            }
            store.state.dialogsPage.messagesData.push(newMessage)
            store.state.dialogsPage.newMessageText = ''
            renderEntireTree(store.state)
        },
        
        update_new_message_text(new_text){
            store.state.dialogsPage.newMessageText = new_text
            renderEntireTree(store.state)
        }
         
    },

}

//callback function
export const subscribe = (observer) => {
    renderEntireTree = observer
}
 
export default store;

window.state = store.state;