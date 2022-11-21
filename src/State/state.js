import Dialogs from "../components/Dialogs/Dialogs"

let state = {
 ProfilePage: {
    posts: [
    { message: "Hi im okay", likeCounts: '12' },
    { message: 'How old are you', likeCounts: '13' },
    { message: 'i love football', likeCounts: '7' },
  ]
},
DialogsPage:{ 
   dialogs: [
    { id: 1, name: 'Illy' },
    { id: 2, name: 'Dimon' },
    { id: 3, name: 'Evelyn' },
    { id: 4, name: 'Nikol' },
    { id: 5, name: 'Jewheniy' },
  ],
  
   messages: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'how are you' },
    { id: 3, message: 'how old are you' },
    { id: 4, message: 'yo' },
    { id: 5, message: 'yo' },
  ]
} 
}
export let addPost= (postMessage) => {
  let newPost = {
    message: postMessage ,
    likeCounts: 0
      };

  state.ProfilePage.posts.push (newPost);
}
  


export default state