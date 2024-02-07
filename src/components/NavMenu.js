import { useState } from "react";

const NavMenu = () =>
{
    const [isActive, setIsActive] = useState(true);
    return (
    <div className='navbody'>
        <div className={isActive ? 'menu' : 'menu expanded'} >
            <div className={isActive ? 'Navcontainer' : 'Navcontainer close'} >
                <div className={isActive?  'toggle' : 'toggle close'} onClick={()=> { setIsActive(!isActive) }}></div>
                {console.log(isActive)}
            </div>
            <span className={isActive?  'hidden' : null}><a href="#">How it works </a></span>
            <span className={isActive?  'hidden' : null}><a href="#">Who are we </a></span>
            <span className={isActive?  'hidden' : null}><a href="#">Where we are</a></span>
        </div>
    </div>
    )
}

export default NavMenu