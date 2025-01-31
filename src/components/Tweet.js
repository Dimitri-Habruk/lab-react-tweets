import ProfileImage from './ProfileImage'
import React from 'react';
import User from './User';
import Timestamp from './Timestamp';

function Tweet(props) {
  console.log(props)

  return (
    <div className="tweet">
          <ProfileImage imgProfile={props.tweet.user.image} />
          <User usName={props.tweet.user.name}/>

    
      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span>

        </div>
      
      <Timestamp props={props.tweet.timestamp}/>
        <p className="message">{props.tweet.message} </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
