import { combineReducers, legacy_createStore as createStore } from "redux"
import ProfilePageReducer from './profile-reduser'
import DialogsPageReducer from './dialog-reduser'
import UsersPageReducer from'./users-reduser'

let redusers = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogsPage: DialogsPageReducer,
    UsersPage: UsersPageReducer
})


let store = createStore(redusers)

window.store = store


export default store
