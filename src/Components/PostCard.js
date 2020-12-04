import React from 'react'
import '../css/postcard.css'
export default function PostCard(props) {
    return (
        <div className="postCard">
            <div className="cardHeader">
            <div className="postedBy"><span > {props.card.userName}</span></div>
            <div className="eventLocation"><span > {props.card.eventLocation}</span></div>
            </div>
            {props.card.isText && <div className="cardText">{props.card.text}</div>}
            {props.card.isImage && <div className="cardImage"><img src={props.imageUrl} style={{width:300,height:300}}></img></div>}
            <div className="actionButtons">
                <button>Kindle</button>
                <button>Support</button>
            </div>
            <div className="caption">
                <p>{props.card.caption}</p>
            </div>
            {/* ADD COMMENTS SECTION HERE*/}
        </div>
    )
}
