import React from 'react';
import { familyData } from './data';

const WeddingInvitation = ({ familyName }) => {
  const familyMembers = familyData[familyName] || [];

  return (
    <div>
      <h2>You're Invited!</h2>
      <p>Dear {familyMembers.join(', ')},</p>
      {/* Add your invitation content here */}
    </div>
  );
};

export default WeddingInvitation;
