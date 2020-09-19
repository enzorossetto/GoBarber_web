import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';

import { Toast } from './components';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <Toast />
    <GlobalStyles />
  </>
);

export default App;
