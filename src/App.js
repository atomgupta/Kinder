import React from 'react'
import {useState,useEffect} from 'react'
import './css/app.css'
import Postcard from './Components/PostCard'
import PostForm from './Components/PostForm'
export default function App() {
  
const [card,setCard]=useState([])

useEffect(()=>{
  // fetch('http://localhost:5000/posts').then(res=>res.json()).then(response=>{
  //   console.log("response",response)
  //   setCard(response.response)
  // })
  fetchPosts()
},[])

useEffect(()=>{
console.log("cards changed",card)
},[card])
const fetchPosts=()=>{
  fetch('http://localhost:5000/posts').then(res=>res.json()).then(response=>{
    console.log("response",response)
    setCard(response.response)
  })
}

const getPost=(e)=>{
  console.log("clicked")
  fetchPosts()

}
const createPost=()=>{
  const user={
    isImage:true,
    isText:true,
    postText:"I have been planting saplings in this park for 3 months now and look how things have turned out.",
    caption:"Changing planet one step at a time",
    eventLocation:"jaipur",
    userLocation:"surat",
    userName:"Sid",
    imageUrl:"https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  }
  console.log("clicked")
  
  fetch('http://localhost:5000/post',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  }).then(response=>response.json()).then(response=>{
    console.log("response after",response.postcreated)
    const addPost=[]
    
    addPost.push(response.postcreated)
    const test=[...card,...addPost]
    console.log("TTESSTT",test)
    setCard([...card,...addPost])
  })

}


  return (
    <div>
    <div>
    <button onClick={(e)=>{getPost(e)}}>get Posts</button>
    <button onClick={(e)=>{createPost(e)}}>create Post</button>
    </div>
    <div className="createPost">
      <PostForm/>
    </div>
    {card.length==0?<h1>nothing</h1>:
    <div className='cardfeed'>
    {card.map((card)=><Postcard imageUrl={card.imageUrl} card={card}/>)}

    </div>
    }
    </div>
  )
}
