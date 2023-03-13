import { combineReducers,legacy_createStore as createStore } from "redux"
import ProfilePageReduser from './profile-reduser'
import DialogsPageReduser from './dialog-reduser'

let redusers = combineReducers({
    ProfilePage : ProfilePageReduser,
    DialogsPage :DialogsPageReduser
    })


    let store =  createStore(redusers)

    
export default store
