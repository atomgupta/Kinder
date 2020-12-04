import React from 'react'
import {useState,useEffect} from 'react'
import './css/app.css'
import Postcard from './Components/PostCard'
export default function App() {
  
const [card,setCard]=useState([{
  isImage:true,
  isText:true,
  text:"I have been planting saplings in this park for 3 months now and look how things have turned out.",
  caption:"Changing planet one step at a time",
  eventLocation:"Jawahar Circle,Malviya Nagar",
  userLocation:"Malviya Nagar",
  userName:"Rahul",
  imageUrl:"https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
},{
  isImage:true,
  isText:true,
  text:"I have been planting saplings in this park for 3 months now and look how things have turned out.",
  caption:"Changing planet one step at a time",
  eventLocation:"Jawahar Circle,Malviya Nagar",
  userLocation:"Malviya Nagar",
  userName:"Rahul",
  imageUrl:"https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
},{
  isImage:true,
  isText:true,
  text:"I have been planting saplings in this park for 3 months now and look how things have turned out.",
  caption:"Changing planet one step at a time",
  eventLocation:"Jawahar Circle,Malviya Nagar",
  userLocation:"Malviya Nagar",
  userName:"Rahul",
  imageUrl:"https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
}])


  return (
    <div className='cardfeed'>
    {card.map((card)=><Postcard imageUrl={card.imageUrl} card={card}/>)}

    </div>
  )
}
