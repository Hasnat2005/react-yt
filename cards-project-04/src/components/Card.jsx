import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='Card'>
        <div className='top'>
          <img id='logo' src={props.img} alt="" />
          <button id='savebtn'>Save <i id='icon' class="ri-bookmark-line"></i></button>
        </div>
        <div className='mid'>
          <h4>{props.brandname} <span>{props.time}</span></h4>
          <h3>{props.post}</h3>
          <p id='midicon'><h7>Remote</h7> <h7>Senior level</h7></p>

        </div>
        <div className='bottom'>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________</p>
           <div className='btmcontainer'>
            <p><h3>{props.payment}</h3> <h7>{props.address}</h7></p>
            <button>Apply Now</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Card
