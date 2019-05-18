import React from 'react';

const Invitation = ({author, avatar, timeAgo, content}) => {
  return (<React.Fragment>
    <img className="right floated mini ui image" src={avatar} alt="avatar"/>
    <div className="header">{author}</div>
    <div className="meta">{timeAgo}</div>
    <div className="description">{`${author.split(' ')[0]} ${content}`}</div>
  </React.Fragment>);
};

export default Invitation;
