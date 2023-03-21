import { combineReducers,legacy_createStore as createStore } from "redux"
import ProfilePageReducer from './profile-reduser'
import DialogsPageReducer from './dialog-reduser'

let redusers = combineReducers({
    ProfilePage : ProfilePageReducer,
    DialogsPage :DialogsPageReducer
    })


let store =  createStore(redusers)

<<<<<<< HEAD
window.store = store    
        
=======

window.store = store // щоб дивитись в консоль лог тіпа store.getState() подивитись стан стейту
    
>>>>>>> f48d723ba3db62a0143a7084a8acc87adce37249
export default store
