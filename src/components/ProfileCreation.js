import { useState } from "react";

const ProfileCreation = (props) =>{

    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    return (
        <>
        <label>First Name
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </label>
        <label>Last Name
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>          
                
                
        </>
    )
}

export default ProfileCreation