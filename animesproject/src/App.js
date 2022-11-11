import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './Pages/routes/AppRoutes';

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
