import React from 'react';

import Header from './header/Header';
import Footer from './Footer/Footer';

export default ({children}) => (
  <div className="container">
    <Header />
    {children}
    <Footer />
  </div>
)