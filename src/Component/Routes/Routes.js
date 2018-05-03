import React from 'react'
import {Route, Link} from 'react-router-dom'

import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import AnnouncementSingleItem from "../AnnouncementSingleItemDisplay/AnnouncementSingleItemDisplay"
import AnnouncementInList from "../AnnouncementsListDisplay/AnnouncementsListDisplay"

class Routes extends React.Component{
    render(){  
        return ( 
        <div>    
        <Route exact path="/LogIn" render={(props)=><LogIn/>} />
        <Route exact path ='/SignUp' render={(props) =><SignUp/>} />
        <Route exact path ='/single_announcement/:name' render={(props) => <AnnouncementSingleItem />} />
        <Route exact path ='/announcements' render={(props) => <AnnouncementInList />} />
        </div>
    )}
}

export default Routes