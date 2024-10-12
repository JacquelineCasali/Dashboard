import React from 'react'
import "./TopBox.css"
import { topDealUsers } from '../../db/data'
export default function TopBox() {
  return (
    <div className='topBox'>
   <h1>
   Top Deals
   
    </h1>  
    <div className="list">
        {topDealUsers.map(user=>(
            <div className="listIten" key={user.id}>
                <div className="user">
                    <img  className="img" src={user.img} alt="" />
               <div className="userTexts">
                <span className='username'>{user.username}</span>
                <span className="email">{user.email}</span>
               
               </div>
               
                </div>
                <div className="amount">${user.amount}</div>
            </div>
        ))

        }
    </div>
     </div>
  )
}
