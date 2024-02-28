import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';


const AppLayout = () =>
{
    return (
      <div className='app'>
        <div className='u-sheet'>
          <Header/>
          <Body/>
        </div>
        <Footer/>
      </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
