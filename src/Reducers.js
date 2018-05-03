import {combineReducers} from 'redux'

var description =  [{name : "Dar tayara a riadh il andalous",
price : 1700,
description : "Maison a louer",
image : "http://brockfc.com/c/luxe-maison-de-luxe-somptueux-ukraine-maison-contemporaine-aix-en-provence-architecture-pinterest-936x527.jpg"
},
{name : "Karhba tayara ",
price : 1700,
description : "Voiture à vendre",
image :'http://www.dlm.fr/assets/dyn-img/categories/voiture-societe.png',
},
{name : "Moto ytayara",
price : 1700,
description : "Moto a louer",
image : "https://media.zigcdn.com/media/model/2016/Sep/moto-guzzi-v9-right_600x300.jpg",
},
{name : "Dar tayara a riadh il andalous",
price : 1700,
description : "Maison a louer",
image : "http://brockfc.com/c/luxe-maison-de-luxe-somptueux-ukraine-maison-contemporaine-aix-en-provence-architecture-pinterest-936x527.jpg"
},
{name : "Karhba tayara ",
price : 1700,
description : "Voiture à vendre",
image :'http://www.dlm.fr/assets/dyn-img/categories/voiture-societe.png',
},
{name : "Moto ytayara",
price : 1700,
description : "Moto a louer",
image : "https://media.zigcdn.com/media/model/2016/Sep/moto-guzzi-v9-right_600x300.jpg",
},
]

const Announcements = (state, action) => {
    switch(action.type) {
        default :
        return state || description
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

let Reducers = combineReducers({
    Announcements,
    CurrentAnnouncement
})

export default Reducers