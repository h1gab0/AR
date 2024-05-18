import React from 'react';
import WeddingInvitation from './WeddingInvitation';
import { familyData } from './data';

const InvitationContainer = () => {
  return (
    <div>
      {Object.keys(familyData).map((familyName) => (
        <WeddingInvitation key={familyName} familyName={familyName} />
      ))}
    </div>
  );
};

export default InvitationContainer;
