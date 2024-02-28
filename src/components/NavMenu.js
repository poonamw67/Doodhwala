import { useState, useRef } from "react";
import HowItWorks from "./HowItWorks";
import WhereWeAre from "./WhereWeAre";
import WhoWeAre from "./WhoWeAre";

const NavMenu = () =>
{
    const [isActive, setIsActive] = useState(true);
    const howItworksRef = useRef(null);
    const whoWeAreRef = useRef(null);
    const whereWeAreRef = useRef(null);

    const scrollToMenu = (targetRef) =>
    {
        targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
    <>
    <div className='navbody'>
        <div className={isActive ? 'menu' : 'menu expanded'} >
            <div className={isActive ? 'Navcontainer' : 'Navcontainer close'} >
                <div className={isActive?  'toggle' : 'toggle close'} onClick={()=> { setIsActive(!isActive) }}></div>
            </div>
            <span className={isActive?  'hidden' : null}><a onClick={() => scrollToMenu(howItworksRef)}>How it works </a></span>
            <span className={isActive?  'hidden' : null}><a onClick={()=> scrollToMenu(whoWeAreRef)}> Who are we </a></span>
            <span className={isActive?  'hidden' : null}><a onClick={()=> scrollToMenu(whereWeAreRef)}>Where we are</a></span>
        </div>
    </div>
    <HowItWorks ref={howItworksRef}/>
    <WhoWeAre ref={whoWeAreRef}/>
    <WhereWeAre ref={whereWeAreRef}/>
    </>
    )
}

export default NavMenu