import {combineReducers} from 'redux'

import CategoriesList from "./Data/Categories"
import Annonces from "./Data/Annonces"
import LieuxList from "./Data/Lieux"


const Announcements = (state = Annonces, action) => {
    switch(action.type) {
        default :
        return state
    }
}

const Categories = (state = CategoriesList, action) => {
    switch(action.type){
        default :
            return state
    }
}

const Lieux =(state = LieuxList, action) => {
    switch(action.type){
        default :
            return state
    } 
}

const ConnectedUser = (state={}, action) => {
    switch(action.type){
        case "ADD_USER" :
            return state = action.data
        case "LOG_OUT" :
            return state = {}    
        default : 
            return state    
    } 
}


const CurrentAnnouncement = (state, action) => {
    switch(action.type) {
        case "Add_Announcement" :
         return state = action.data
        default : 
         return state || {name : "",
         price : "",
         description : "",
         image : ""
         }  
    }
}

const Reducers = combineReducers({
    Announcements,
    CurrentAnnouncement,
    Categories,
    Lieux,
    ConnectedUser
})

export default Reducers