import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './AnnouncementItem.css'


class AnnoucementItem extends React.Component{
    render(){
        return (
         <div className='announcement-item-container'
           onClick= {() => this.props.setCurrentAnnouncementValue(this.props.el)}>
                <div className="img-container">
                <Link to={`/single_announcement/${this.props.el.name}`} style={{textDecoration:"none"}}> <img src={this.props.el.image} /> </Link>
                </div>
                <div className ="description-container">
                <Link to={`/single_announcement/${this.props.el.name}`} 
                style={{textDecoration:"none", color:"inherit"}} 
                className="title-link"> <p>{this.props.el.name}</p> </Link>
                <p>{this.props.el.price}</p> 
                <p>{this.props.el.description}</p>
                </div>
            </div>
             
        )
    }
}

const mapStateToProps = (state) => {
    return({

    })
}


const mapDispatchToProps = (dispatch) => {
    return({
        setCurrentAnnouncementValue : data => {
            dispatch ({
                type : "Add_Announcement",
                data : data,
            })
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnoucementItem)