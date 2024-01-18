import React from 'react';

function Input({label, textArea, ...props}) {
    return (
        <p>
            <label>{label}</label>
            {textArea ? <textarea {...props}/> : <input {...props}/>}
        </p>
    );
}

export default Input;