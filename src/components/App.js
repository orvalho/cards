import React from 'react';
import faker from 'faker';
import CardList from './CardList';
import ApprovalCard from './ApprovalCard';
import Invitation from './Invitation';
import Confirmation from './Confirmation';

const App = () => {
  return (<div className="ui container">
    <h2>Invites</h2>
    <CardList>
      <ApprovalCard>
        <Invitation author={`${faker.name.firstName()} ${faker.name.lastName()}`} avatar={faker.image.avatar()} timeAgo="Today at 10:45PM" content="sent you a friend request."/>
      </ApprovalCard>
      <ApprovalCard>
        <Invitation author={`${faker.name.firstName()} ${faker.name.lastName()}`} avatar={faker.image.avatar()} timeAgo="Today at 8:05AM" content="invited you to the group WebDev."/>
      </ApprovalCard>
      <ApprovalCard>
        <Invitation author={`${faker.name.firstName()} ${faker.name.lastName()}`} avatar={faker.image.avatar()} timeAgo="Yesterday at 9:20PM" content="sent you a friend request."/>
      </ApprovalCard>
    </CardList>
    <h2>Confirmations</h2>
    <CardList>
      <ApprovalCard>
        <Confirmation header="Warning!" content="Are you sure you want to delete this?"/>
      </ApprovalCard>
      <ApprovalCard>
        <Confirmation header="Attention!" content="Are you sure you want to reset settings?"/>
      </ApprovalCard>
      <ApprovalCard>
        <Confirmation header="Confirm Navigation!" content="Leaving this page will lose your changes. Are you sure?"/>
      </ApprovalCard>
    </CardList>
  </div>);
};

export default App;
