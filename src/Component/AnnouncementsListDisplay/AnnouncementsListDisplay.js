import React from 'react'
import {connect} from 'react-redux'
import './AnnouncementsListDisplay.css'

import AnnoucementItem from './AnnouncementItem'



class AnnouncementInList extends React.Component{
    render() {
        console.log(this.props.Announcements)
        return(
            <div className="annoucnement-list-container">
            {this.props.Announcements.map((el, i) => {return <AnnoucementItem key={i} el={el} />})}  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        Announcements : state.Announcements
    })
} 

const mapDispatchToProps = (dispatch) => {

} 

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementInList)