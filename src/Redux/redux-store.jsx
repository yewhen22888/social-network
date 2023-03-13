import { combineReducers,legacy_createStore as createStore } from "redux"
import ProfilePageReducer from './profile-reduser'
import DialogsPageReducer from './dialog-reduser'

let redusers = combineReducers({
    ProfilePage : ProfilePageReducer,
    DialogsPage :DialogsPageReducer
    })


let store =  createStore(redusers)


window.store = store // щоб дивитись в консоль лог тіпа store.getState() подивитись стан стейту
    
export default store
