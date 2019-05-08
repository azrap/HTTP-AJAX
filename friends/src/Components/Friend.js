import React from 'react';
import { Route, NavLink } from 'react-router-dom';


function Item(props) {
    const friend = props.friends.find(
      thing => `${thing.id}` === props.match.params.id
    );
  
    return (
        <div className="friend-card">
              <h2>{friend.name}</h2>
              <h4>{friend.age}</h4>
              <h4>{friend.email}</h4>
            </div>

        )
}