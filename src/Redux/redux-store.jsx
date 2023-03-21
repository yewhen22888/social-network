import { combineReducers,legacy_createStore as createStore } from "redux"
import ProfilePageReducer from './profile-reduser'
import DialogsPageReducer from './dialog-reduser'

let redusers = combineReducers({
    ProfilePage : ProfilePageReducer,
    DialogsPage :DialogsPageReducer
    })


let store =  createStore(redusers)

  
        

export default store
