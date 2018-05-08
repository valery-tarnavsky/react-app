import  React from 'react';

function Input({type, name, placeholder}) {
    return (
       <div className="form-group">
            <input className="form-group__item" type={type} name={name} placeholder={placeholder} />
       </div>
    )
}

export default Input;