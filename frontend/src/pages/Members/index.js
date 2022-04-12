import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';

const Members = () => {
  const [members, setMembers] = useState(null);

  const fetchmembers = async () => {
    const response = await api.get('/members');
    const membersFetched = response.data;
    console.log(response);
    setMembers(membersFetched);
  };

  useEffect(() => {
    fetchmembers();
  }, []);

  return (
    <div>
      <h1>members PAGE UHUHUHUH</h1>
      <div className='cards-wrapper'>
        {members ? (
          members.map((member) => (
            <p key={member._id}>
              {member.name} {member.lastNames}
            </p>
          ))
        ) : (
          <h2>No members</h2>
        )}
      </div>
    </div>
  );
};

export default Members;
