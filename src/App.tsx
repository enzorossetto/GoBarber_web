import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyles />
  </>
);

export default App;
