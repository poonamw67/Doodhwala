import React from 'react';
import ReactDOM from 'react-dom';


/*
AppLayout
* Header
  - Title
  - Login
* Body
  - SVG/Video, HamburgerMenu
  - Cards
  - CenterImage
* Footer
  - Links
*/

const HeaderComponent = () =>
{
    return (
      <>
      <div className='center'>
      <TitleComponent/>
      <LoginComponent/>
      </div>
      </>
    )
}

const TitleComponent = () =>
{
  return (
    <div className="topHeader">
        <a href='/'>Doodhwalla</a>
      </div>
  )
}
const LoginComponent = () =>
{
  return (
  <div>
    <button className="">Login</button>
  </div>
)
}

const AppLayout = () =>
{
    return <HeaderComponent/>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
