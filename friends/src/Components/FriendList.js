import React from 'react';
import { Link } from 'react-router-dom';


function FriendList(props) {
    return (
      <div className="items-list-wrapper">
        {props.friends.map(friend => (
          <div className="friend-card" key={friend.id}>
            {/* <Link to={`/item-list/${friend.id}`}> */}
              <h2>{friend.name}</h2>
              <h4>${friend.age}</h4>
              <h4>${friend.email}</h4>
  
            {/* </Link> */}
          </div>
        ))}
      </div>
    );
  }
  
  export default FriendList;
  