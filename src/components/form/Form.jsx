import  React from 'react';
import  Input from './Input';

function Form({ onSubmit, isRendered }) {
    if(!isRendered){
        return null;
    }
    return (
        <form className="signup-form" onSubmit={onSubmit}>
            <Input type="text" name="todoName" placeholder="todoName" />
            <button type="submit" className="form-btn">Sign up</button>
        </form>
    )
}

export default Form;