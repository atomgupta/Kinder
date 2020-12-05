import React from 'react'
require('../css/postform.css')
// isImage:true,
//     isText:true,
//     text:"I have been planting saplings in this park for 3 months now and look how things have turned out.",
//     caption:"Changing planet one step at a time",
//     eventLocation:"jaipur",
//     userLocation:"surat",
//     userName:"Sid",
//     imageUrl:"https

export default function PostForm() {
    return (
        <div className="uploadpostcontainer">
            <input type="text" name= "postText" placeholder="enter text for the post"/> 
            <input type="text" name= "caption" placeholder="enter caption for the post"/> 
            <input type="text" name= "eventLocation" placeholder="enter event location for the post"/> 
            <input type="text" name= "userLocation" placeholder="enter user location location for the post"/> 
            <input type="text" name= "userName" placeholder="enter user name for the post"/> 
            <input type="text" name="imageUrl" placeholder="enter image url"/>
                       

        </div>
    )
}
