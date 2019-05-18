import React from 'react';

const Confirmation = ({header, content}) => {
  return (<div className="content">
    <h3 className="header">{header}</h3>
    <p className="description">{content}</p>
  </div>);
};

export default Confirmation;
