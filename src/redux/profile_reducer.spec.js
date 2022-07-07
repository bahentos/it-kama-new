import profile_reducer, { delete_post } from "./profile_reducer"
describe('profile_resucer tests', () => {
    test('a new message should be added', () => {
        let state = {
            postsData: [
                { id: 1, post: 'Est et cupidatat minim voluptate eiusmod dolore commodo culpa proident pariatur consectetur.', like_count: 2 },
                { id: 2, post: 'Exercitation et anim minim voluptate ad nisi commodo ipsum commodo ad et elit laboris.', like_count: 5 },
                { id: 3, post: 'Ut velit pariatur ex ex ipsum veniam laboris ipsum tempor ipsum enim velit.', like_count: 7 },
                { id: 4, post: 'Et excepteur do est labore velit deserunt duis.', like_count: 22 },
            ]
        }
        let action = delete_post(1)
        let newState = profile_reducer(state, action)
    })
})
