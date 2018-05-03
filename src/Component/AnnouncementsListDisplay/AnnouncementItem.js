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
                <Link to={`/single_announcement/${this.props.el.name}`} > <img src={this.props.el.image} /> </Link>
                </div>
                <div className ="description-container">
                <Link to={`/single_announcement/${this.props.el.name}`} > <h3>{this.props.el.name}</h3> </Link>
                <h3>{this.props.el.price}</h3> 
                <h4>{this.props.el.description}</h4>
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