import React from 'react'
import {Route, Link, Redirect} from 'react-router-dom'

import Main from '../MainPage/Main'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import SingleAnonceDisplay from "../SingleAnonceDisplay/SingleAnonceDisplay"
import AnnouncementInList from "../AnnouncementsListDisplay/AnnouncementsListDisplay"

class Routes extends React.Component{
    render(){  
        return ( 
        <div>    
        <Route exact path='/' render={()=><Redirect to='/home'/>}/>    
        <Route exact path='/home' render={()=><Main/>}/> 
        <Route exact path="/login" render={(props)=><LogIn/>} />
        <Route exact path ='/signup' render={(props) =><SignUp/>} />
        <Route exact path ='/single_announcement/:name' render={(props) => <SingleAnonceDisplay />} />
        <Route exact path ='/announcements' render={(props) => <AnnouncementInList />} />
        </div>
    )}
}

export default Routes