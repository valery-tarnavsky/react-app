import  React from 'react';

function SignIn({ onButtonClick }) {
    return (
       <button className="sign-in-btn" onClick={onButtonClick}>Sign in</button>
    )
}

export default SignIn;