import React from 'react';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={() => signOut()}>Sair</Button>
    </div>
  );
};

export default Dashboard;
