import React, { useEffect, useState } from 'react'
import './view.css'
import Chat from '../chatPage/Chat';
function View() {
    const [chatList,setChatList] =useState([]);
    const [chatListOriginal,setChatListOriginal] =useState([]);
    const [isChatOpen,setIsChatOpen] = useState(false);
    const [chatData,setChatData] = useState({})

    useEffect(()=>{
fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats').then(res=>res.json())
.then(res=>{
    console.log(res);
    setChatList(res)
    setChatListOriginal(res)
}).catch(err=>console.log(err))

    },[])
    const searchHandler = (e)=>{
        const value = e.target.value.toLowerCase()
       if( value.length>0)
        setChatList(()=>chatListOriginal.filter(item=> item.title.toLowerCase().includes(value) || item.orderId.toLowerCase().includes(value)))
    else{
        setChatList(chatListOriginal)
    }
    }
    const openChat=(item)=>{
        setIsChatOpen(true);
        setChatData(item)
    }
  return (
    <div >
        <div className={isChatOpen ? 'divide': ''}>

        <div className={isChatOpen ? "part1": ""} >

        <div >
            <h4 className='search'>Filter by Title/ Order ID</h4>
            <input className='searchField' type='text' placeholder='start typing to search' onChange={searchHandler} ></input>
     <hr></hr>
        </div>
        {
            chatList.map((item,index)=>
            <div key={item.id} onClick={()=>openChat(item)}>
        <div  className='alignment'>
            <div >
                <img className='logo' alt='logo' src={item.imageURL}  />
            </div>
            <div className='chatName'>

            <div>
                <h6>{item.title}</h6>
                <h6>Order {item.orderId}</h6>

            </div>
           
                <p>{(new Date(item.latestMessageTimestamp)).toLocaleDateString()}</p>
      
            </div>
        </div>
            <hr></hr>
        </div>
            )
        }
        </div>

        <div className={isChatOpen ? "part1": "hide"} >
            <div className='vl'></div>
            <Chat data={chatData} />
        </div>

        </div>

    </div>
  )
}

export default View