import React from 'react'
import {connect} from 'react-redux'

class AnnouncementSingleItem extends React.Component{
    render(){
        return(
            <div className='announcement-item-container'>
                <div className="img-container">
                <img  src={this.props.CurrentAnnouncement.image}/>
                </div>
                <div className ="description-container">
                <h3>{this.props.CurrentAnnouncement.name}</h3>
                <h3>{this.props.CurrentAnnouncement.price}</h3> 
                <h4>{this.props.CurrentAnnouncement.description}</h4>
                </div>
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
   return({ 
       CurrentAnnouncement : state.CurrentAnnouncement
    })  
} 

const mapDispatchToProps = (dispatch) => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementSingleItem)