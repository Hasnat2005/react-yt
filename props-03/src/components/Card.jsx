import React from 'react'

function Card(props){
    var username=props.user;
    var details=props.details;
    var profilePic=props.profilePic;
  return (
    <div className='Card'>
        <img src={profilePic} alt="" />
        <h1>{username}</h1>
        <p>{details}</p>
        <button>View Profile</button>
    </div>
  ) 
}

export default Card
