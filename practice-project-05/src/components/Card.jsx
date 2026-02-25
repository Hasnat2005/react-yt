import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='=top'>
        <img src={props.img} alt="" />
      </div>
      <div className='mid1'>
        <h2>{props.title}</h2>
        <div className="star-container">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                key={star}
                className={star <= props.rating ? "star filled" : "star"}
                >
                ★
                </span>
            ))}
        </div>

        <div className='mid2'>
            <h4>{props.location}</h4>
            <h5>{props.price}</h5>
        </div>

        <div className='bottom'>
            <button>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Card
