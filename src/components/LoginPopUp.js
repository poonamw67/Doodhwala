import { useState} from "react";
import ProfileCreation from "./ProfileCreation"; 

const LoginPopUp = (props) => {
    const [isNewUser, setIsNewUser] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('')
    const [otp, setOTP] = useState('')
    const [showOTP, setShowOTP] = useState(false);

    function showOTPScreen()
    {
        //check if phone number exist in DB
        setIsNewUser(!isNewUser);
        if(!isNewUser)
        {
            setShowOTP(!showOTP);
        }
    }

    function validateOTP()
    {
        //Validate OTP
    }

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    return(
        <div className="popup">
            <div className="popup-inner">
            <button className="close-btn" onClick={props.toggle}></button>
                <h2>{isNewUser ? "Create Profile" : "Login"}</h2>
                <form>
                {!showOTP &&
                 (
                    <>
                    <label>
                        Phone number
                        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </label>
                    <button onClick={showOTPScreen}>Send code</button>
                    </>
                 )
                }
                {!isNewUser && showOTP && (
                    <>
                    <label>
                        OTP:
                        <input type="text" value={otp} onChange={e => otp(e.target.value)} />
                    </label>
                    <button onClick={validateOTP}>Validate OTP</button>
                    </>
                    )
                }
                {isNewUser && (
                    <ProfileCreation toggle={props.toggle} />
                )
                }
                </form>
            </div>
        </div>
        )        
        
        
}

export default LoginPopUp