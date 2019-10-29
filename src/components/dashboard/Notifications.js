import React from 'react'
import moment from 'moment'
const Notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card z-depth-2 #fafafa grey lighten-5">
        <div className="card-content blue-grey-text">
          <h5>Notifications</h5>
          <ul className="notifications">
            {notifications && notifications.map(noti => {
              return (
                <li key={noti.id}>
                  <span className="blue-grey-text">{noti.user}</span>
                  <span className="grey-text"> {noti.content}</span>
                  <div className="grey-text note-date">
                    {moment(noti.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications