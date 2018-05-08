import  React from 'react';
import  Input from './Input';

function Form({ onSubmit }) {
    return (
        <form className="signup-form" onSubmit={onSubmit}>
            <Input type="text" name="username" placeholder="username" />
            <Input type="text" name="username" placeholder="Name" />
            <Input type="password" name="password" placeholder="Password" />
            <button type="submit" className="form-btn">Sign up</button>
        </form>
    )
}

export default Form;