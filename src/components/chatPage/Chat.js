import React from "react";
import "./chat.css";
function Chat(props) {
  return (
    <div>
      <div className="align">
        <div>
          <img className="logo" alt="logo" src={props.data.imageURL} />
        </div>
        <div>
          <h6>{props.data.title}</h6>
        </div>
      </div>
      <div>

       <div className="chatdata">
<div className="chat">

</div>


        <div>
            <div className="input">

            <input placeholder="Type a message" style={{width:'100%'}}></input>
            <button>Send</button>
            </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Chat;
